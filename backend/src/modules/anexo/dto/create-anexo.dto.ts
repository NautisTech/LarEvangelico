import { OmitType } from '@nestjs/mapped-types';
import { Anexo } from '@/entities';
import { IsOptional, IsNumber } from 'class-validator';

export class CreateAnexoDto extends OmitType(Anexo, ['id', 'tamanho', 'criado_em', 'atualizado_em', 'valor']) { }