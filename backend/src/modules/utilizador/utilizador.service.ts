import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import { Utilizador, Anexo } from '@/entities';

import { CreateUtilizadorDto } from './dto/create-utilizador.dto';
import { UpdateUtilizadorDto } from './dto/update-utilizador.dto';
import { BulkUpdateUtilizadorDto } from './dto/bulk-update-utilizador.dto';

@Injectable()
export class UtilizadorService {
  constructor(
    @InjectRepository(Utilizador)
    private readonly utilizadorRepository: Repository<Utilizador>,
    @InjectRepository(Anexo)
    private readonly anexoRepository: Repository<Anexo>,
  ) { }

  readonly relations = [
    'anexo',
  ];

  async create(createUtilizadorDto: CreateUtilizadorDto) {
    const { anexo, ...utilizadorBase } = createUtilizadorDto;
    const utilizador = this.utilizadorRepository.create(utilizadorBase);

    if (anexo) utilizador.anexo = await this.anexoRepository.findOneBy({ id: anexo.id });

    utilizador.criado_em = new Date();
    utilizador.ativo = true;

    return await this.utilizadorRepository.save(utilizador);
  }

  async findAll(): Promise<Utilizador[]> {
    return await this.utilizadorRepository.find({
      where: { pbc: true },
      relations: this.relations,
    });
  }

  async findAllBase(): Promise<Utilizador[]> {
    return await this.utilizadorRepository.find({
      where: { pbc: true },
      relations: this.relations,
    });
  }

  async findById(id: number) {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);
    return utilizador;
  }

  async findByIdBase(id: number) {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);
    return utilizador;
  }

  async findByEmail(email: string) {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { email },
      relations: this.relations,
    });
    if (!utilizador) throw new NotFoundException(`Utilizador com email ${email} não encontrado`);
    return utilizador;
  }

  async findByEmailForAuth(email: string): Promise<Utilizador | null> {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nome', 'ativo'],
    });
    return utilizador;
  }

  async findByUsername(username: string) {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { username },
      relations: this.relations,
    });
    if (!utilizador) throw new NotFoundException(`Utilizador com nome de utilizador ${username} não encontrado`);
    return utilizador;
  }

  async findByUsernameForAuth(username: string): Promise<Utilizador | null> {
    const utilizador = await this.utilizadorRepository.findOne({
      where: { username },
      select: ['id', 'username', 'nome', 'ativo'],
    });
    return utilizador;
  }

  async update(id: number, updateUtilizadorDto: UpdateUtilizadorDto) {
    const utilizador = await this.findById(id);
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);

    const { anexo, ...utilizadorBase } = updateUtilizadorDto;

    Object.assign(utilizador, utilizadorBase);

    if (anexo) utilizador.anexo = await this.anexoRepository.findOneBy({ id: anexo.id });

    utilizador.atualizado_em = new Date();

    return await this.utilizadorRepository.save(utilizador);
  }

  async bulkUpdate(bulkUpdateUtilizadorDto: BulkUpdateUtilizadorDto): Promise<Utilizador[]> {
    const { updates } = bulkUpdateUtilizadorDto;
    const utilizadores: Utilizador[] = [];

    for (const u of updates) {
      const { id, data } = u;
      utilizadores.push(await this.update(id, data));
    }

    return utilizadores;
  }

  remove(id: number) {
    return `Esta ação não é permitida. Utilizadores não podem ser eliminados.`;
  }

  async activate(id: number): Promise<Utilizador> {
    const utilizador = await this.findById(id);
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);

    utilizador.ativo = true;
    utilizador.atualizado_em = new Date();

    return await this.utilizadorRepository.save(utilizador);
  }

  async changePassword(id: number, newPassword: string): Promise<Utilizador> {
    const utilizador = await this.findById(id);
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);

    utilizador.senha = newPassword;
    utilizador.atualizado_em = new Date();

    return await this.utilizadorRepository.save(utilizador);
  }

  async bulkActivate(ids: number[]): Promise<Utilizador[]> {
    const utilizadores: Utilizador[] = [];

    for (const id of ids) {
      utilizadores.push(await this.activate(id));
    }

    return utilizadores;
  }

  async deactivate(id: number): Promise<Utilizador> {
    const utilizador = await this.findById(id);
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);

    utilizador.ativo = false;
    utilizador.atualizado_em = new Date();

    return await this.utilizadorRepository.save(utilizador);
  }

  async bulkDeactivate(ids: number[]): Promise<Utilizador[]> {
    const utilizadores: Utilizador[] = [];

    for (const id of ids) {
      utilizadores.push(await this.deactivate(id));
    }

    return utilizadores;
  }

  async registarLogin(id: number, ip: string): Promise<void> {
    const utilizador = await this.findById(id);
    if (!utilizador) throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);

    utilizador.ultimo_login = new Date();
    utilizador.ultimo_ip = ip;
    await this.utilizadorRepository.save(utilizador);
  }
}
