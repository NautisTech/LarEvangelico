import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import { Etiqueta, Modelo, Permissao, Utilizador } from '@/entities';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { BulkUpdateEtiquetaDto } from './dto/bulk-update-etiqueta.dto';

@Injectable()
export class EtiquetaService {
    constructor(
        @InjectRepository(Etiqueta)
        private readonly etiquetaRepository: Repository<Etiqueta>,
    ) { }

    async findAll(): Promise<Etiqueta[]> {
        return await this.etiquetaRepository.find();
    }

    async findById(id: number): Promise<Etiqueta> {
        const etiqueta = await this.etiquetaRepository.findOne({
            where: { id },
        });
        if (!etiqueta) throw new NotFoundException(`Etiqueta com ID ${id} não encontrada`);
        return etiqueta;
    }

    async create(createEtiquetaDto: CreateEtiquetaDto): Promise<Etiqueta> {
        const etiqueta = this.etiquetaRepository.create(createEtiquetaDto);

        return this.etiquetaRepository.save(etiqueta);
    }

    async update(id: number, updateEtiquetaDto: UpdateEtiquetaDto): Promise<Etiqueta> {
        const etiqueta = await this.findById(id);
        if (!etiqueta) throw new NotFoundException(`Etiqueta com ID ${id} não encontrada`);
        Object.assign(etiqueta, updateEtiquetaDto);

        return this.etiquetaRepository.save(etiqueta);
    }

    async delete(id: number): Promise<void> {
        const etiqueta = await this.findById(id);
        if (!etiqueta) throw new NotFoundException(`Etiqueta com ID ${id} não encontrada`);
        await this.etiquetaRepository.remove(etiqueta);
    }

    async bulkDelete(ids: number[]): Promise<void> {
        const etiquetas = await this.etiquetaRepository.findBy({
            id: In(ids)
        });

        if (etiquetas.length !== ids.length) throw new NotFoundException('Uma ou mais etiquetas não foram encontradas');
        await this.etiquetaRepository.remove(etiquetas);
    }

    async bulkUpdate(bulkUpdateEtiquetaDto: BulkUpdateEtiquetaDto): Promise<Etiqueta[]> {
        const { updates } = bulkUpdateEtiquetaDto;
        const etiquetas: Etiqueta[] = [];

        for (const u of updates) {
            const { id, data } = u;
            etiquetas.push(await this.update(id, data));
        }

        return etiquetas;
    }

}
