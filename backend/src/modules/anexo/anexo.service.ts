import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import sharp from 'sharp';
import { Anexo, Conteudo } from '@/entities';
import { Multer } from 'multer';

import { CreateAnexoDto } from './dto/create-anexo.dto';
import { UpdateAnexoDto } from './dto/update-anexo.dto';
import { BulkCreateAnexoDto } from './dto/bulk-create-anexo.dto';

import 'dotenv/config';
import { get } from 'axios';
import { getuid } from 'process';

@Injectable()
export class AnexoService {
    constructor(
        @InjectRepository(Anexo)
        private readonly anexoRepository: Repository<Anexo>,
        @InjectRepository(Conteudo)
        private readonly conteudoRepository: Repository<Conteudo>,
    ) {
        try {
            if (!fs.existsSync(this.uploadPath)) {
                fs.mkdirSync(this.uploadPath, { recursive: true });
            } else {
            }
        } catch (error) {
        }
    }

    private uploadPath = path.resolve(process.cwd(), 'uploads');

    private async optimize(file: Multer.File) {
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.jpeg`;
        const filePath = path.join(this.uploadPath, filename);

        await sharp(file.buffer)
            .resize({ width: 1080, fit: 'inside' })
            .jpeg({ quality: 80 })
            .toFile(filePath);

        const metadata = await sharp(filePath).metadata();

        return { filename, filePath, metadata };
    }

    readonly relations = ['conteudo'];

    async findAll(): Promise<Anexo[]> {
        return await this.anexoRepository.find({ relations: this.relations });
    }

    async findById(id: number): Promise<Anexo> {
        const anexo = await this.anexoRepository.findOne({
            where: { id },
            relations: this.relations,
        });
        if (!anexo) throw new NotFoundException(`Anexo com ID ${id} não encontrado`);
        return anexo;
    }

    async create(file: Multer.File, dto: CreateAnexoDto) {
        try {
            const { filename, filePath, metadata } = await this.optimize(file);

            const uid = uuidv4();
            const timestamp = Date.now();
            const generatedfilename = `${uid}-${timestamp}.jpeg`;

            const finalPath = path.join(this.uploadPath, generatedfilename);
            fs.renameSync(filePath, finalPath); // Renomeia o arquivo otimizado para o nome final

            const valor = `${process.env.API_URL}/files/${generatedfilename}`;


            const anexo = this.anexoRepository.create({
                ...dto,
                nome: generatedfilename,
                tamanho: metadata.size,
                metadados: metadata,
                valor,
            });

            if (dto.conteudo) anexo.conteudo = await this.conteudoRepository.findOne({ where: { id: dto.conteudo.id } }) as Conteudo;

            return this.anexoRepository.save(anexo);
        } catch (error) {
            throw error;
        }
    }

    async bulkCreate(files: Multer.File[], dto: BulkCreateAnexoDto) {
        const anexos = await Promise.all(
            files.map((file, index) => {
                const itemDto = dto.anexos[index]; // pega o DTO correspondente
                return this.create(file, itemDto.data);
            }),
        );
        return anexos;
    }

    async delete(id: number) {
        const anexo = await this.anexoRepository.findOne({ where: { id } });
        if (!anexo) throw new NotFoundException('Anexo not found');

        const filePath = path.join(this.uploadPath, path.basename(anexo.valor));
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

        return this.anexoRepository.remove(anexo);
    }

    async bulkDelete(ids: number[]) {
        const results = await Promise.all(ids.map((id) => this.delete(id)));
        return results;
    }

}
