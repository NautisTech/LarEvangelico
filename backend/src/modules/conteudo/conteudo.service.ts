import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import { Conteudo, Etiqueta, Utilizador, Anexo } from '@/entities';
import { TipoConteudo } from '@/utils';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { BulkUpdateConteudoDto } from './dto/bulk-update-conteudo.dto';

import fs from 'fs';
import path from 'path';

@Injectable()
export class ConteudoService {
    constructor(
        @InjectRepository(Conteudo)
        private readonly conteudoRepository: Repository<Conteudo>,
        @InjectRepository(Etiqueta)
        private readonly etiquetaRepository: Repository<Etiqueta>,
        @InjectRepository(Utilizador)
        private readonly utilizadorRepository: Repository<Utilizador>,
        @InjectRepository(Anexo)
        private readonly anexoRepository: Repository<Anexo>,
    ) { }

    readonly relations = ['criado_por', 'atualizado_por', 'etiquetas', 'anexos'];

    // Helper: garante que todas as etiquetas existems.
    // Comportamento:
    // - entradas com `id` são carregadas por id
    // - entradas sem `id` (ou com id == null) são criadas pelo nome
    // - aceita tanto objetos completos quanto apenas { id } ou { nome }
    private async ensureEtiquetas(etiquetasInput: Etiqueta[]): Promise<Etiqueta[]> {
        if (!etiquetasInput || !Array.isArray(etiquetasInput) || etiquetasInput.length === 0) return [];

        const idsEtiquetas: number[] = [];
        const nomesEtiquetas: string[] = [];

        for (const e of etiquetasInput) {
            if (e.id) {
                idsEtiquetas.push(e.id);
            } else if (e.nome) {
                nomesEtiquetas.push(e.nome);
            }
        }

        const results: Etiqueta[] = [];

        if (idsEtiquetas.length > 0) {
            const existingById = await this.etiquetaRepository.findBy({ id: In(idsEtiquetas) });
            results.push(...existingById);
        }

        if (nomesEtiquetas.length > 0) {
            for (const nome of nomesEtiquetas) {
                let etiqueta = await this.etiquetaRepository.findOneBy({ nome });
                if (!etiqueta) {
                    etiqueta = this.etiquetaRepository.create({ nome });
                    etiqueta = await this.etiquetaRepository.save(etiqueta);
                }
                results.push(etiqueta);
            }
        }

        return results;
    }

    async findTipo(tipo: string, isPublic: boolean = false): Promise<Conteudo[]> {
        const tipoConteudo = TipoConteudo[tipo as keyof typeof TipoConteudo];

        if (isPublic) return await this.conteudoRepository.find({ where: { tipo: tipoConteudo, publico: true }, relations: this.relations });
        else return await this.conteudoRepository.find({ where: { tipo: tipoConteudo }, relations: this.relations });
    }

    async findAll(): Promise<Conteudo[]> {
        return await this.conteudoRepository.find({ relations: this.relations });
    }

    async countView(id: number): Promise<void> {
        const conteudo = await this.findById(id);
        if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);
        conteudo.visualizacoes = (conteudo.visualizacoes ?? 0) + 1;
        await this.conteudoRepository.save(conteudo);
    }

    async findById(id: number, isPublic: boolean = false): Promise<Conteudo> {

        if (isPublic) {
            const conteudo = await this.conteudoRepository.findOne({
                where: { id, publico: true },
                relations: this.relations,
            });
            if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);
            return conteudo;
        } else {
            const conteudo = await this.conteudoRepository.findOne({
                where: { id },
                relations: this.relations,
            });
            if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);
            return conteudo;
        }
    }

    async create(createConteudoDto: CreateConteudoDto, userId: number): Promise<Conteudo> {
        const { etiquetas, ...conteudoBase } = createConteudoDto;
        const conteudo = this.conteudoRepository.create(conteudoBase);

        // usar o nome porque vem do editor em nomes e para os que traz objeto completo nao faz diferença
        if (etiquetas) conteudo.etiquetas = await this.ensureEtiquetas(etiquetas);

        conteudo.criado_em = new Date();
        conteudo.criado_por = await this.utilizadorRepository.findBy({ id: userId }).then(u => u[0]);
        if (conteudo.publico) conteudo.publicado_em = new Date();

        return this.conteudoRepository.save(conteudo);
    }

    async update(id: number, updateConteudoDto: UpdateConteudoDto, userId: number): Promise<Conteudo> {
        // Extrair `anexos` e `comentarios` do DTO para que não sejam reatribuídos diretamente via Object.assign
        const { etiquetas, anexos, ...conteudoBase } = updateConteudoDto as any;

        const conteudo = await this.findById(id);
        if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);

        Object.assign(conteudo, conteudoBase);

        // usar o nome porque vem do editor em nomes e para os que traz objeto completo nao faz diferença
        if (etiquetas) conteudo.etiquetas = await this.ensureEtiquetas(etiquetas);

        const existingAnexos = await this.anexoRepository.find({ where: { conteudo: { id: conteudo.id } } });
        if (existingAnexos.length > 0) {
            for (const a of existingAnexos) {
                try {
                    const filename = path.basename(a.valor || '');
                    const filePath = path.join(process.cwd(), 'uploads', filename);
                    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                } catch (err) {
                    // Não bloquear a atualização por causa de falha ao remover ficheiro
                }

                try {
                    await this.anexoRepository.remove(a);
                } catch (err) {
                    // Não bloquear a atualização por causa de falha ao remover o registo
                }
            }

            conteudo.anexos = [];
        }

        conteudo.atualizado_em = new Date();
        conteudo.atualizado_por = await this.utilizadorRepository.findBy({ id: userId }).then(u => u[0]);

        return this.conteudoRepository.save(conteudo);
    }

    async delete(id: number): Promise<void> {
        const conteudo = await this.findById(id);
        if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);
        await this.conteudoRepository.remove(conteudo);
    }

    async bulkDelete(ids: number[]): Promise<void> {
        const conteudos = await this.conteudoRepository.findBy({
            id: In(ids)
        });

        if (conteudos.length !== ids.length) throw new NotFoundException('Um ou mais conteudos não foram encontrados');
        await this.conteudoRepository.remove(conteudos);
    }

    async bulkUpdate(bulkUpdateConteudoDto: BulkUpdateConteudoDto, userId: number): Promise<Conteudo[]> {
        const { updates } = bulkUpdateConteudoDto;
        const conteudos: Conteudo[] = [];

        for (const u of updates) {
            const { id, data } = u;
            conteudos.push(await this.update(id, data, userId));
        }

        return conteudos;
    }

    async approve(id: number, userId: number): Promise<Conteudo> {
        const conteudo = await this.findById(id);
        if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);

        conteudo.publicado_em = new Date();
        conteudo.publico = true;
        conteudo.atualizado_em = new Date();
        conteudo.atualizado_por = await this.utilizadorRepository.findBy({ id: userId }).then(u => u[0]);

        return await this.conteudoRepository.save(conteudo);
    }

    async bulkapprove(ids: number[], userId: number): Promise<Conteudo[]> {
        const conteudos: Conteudo[] = [];

        for (const id of ids) {
            conteudos.push(await this.approve(id, userId));
        }

        return conteudos;
    }

    async disapprove(id: number, userId: number): Promise<Conteudo> {
        const conteudo = await this.findById(id);
        if (!conteudo) throw new NotFoundException(`Conteudo com ID ${id} não encontrado`);

        conteudo.publicado_em = null;
        conteudo.publico = false;
        conteudo.atualizado_em = new Date();
        conteudo.atualizado_por = await this.utilizadorRepository.findBy({ id: userId }).then(u => u[0]);

        return await this.conteudoRepository.save(conteudo);
    }

    async bulkDisapprove(ids: number[], userId: number): Promise<Conteudo[]> {
        const conteudos: Conteudo[] = [];

        for (const id of ids) {
            conteudos.push(await this.disapprove(id, userId));
        }

        return conteudos;
    }
}
