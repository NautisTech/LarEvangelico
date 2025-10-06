import { OmitType } from '@nestjs/mapped-types';
import { Conteudo } from '@/entities';

export class CreateConteudoDto extends OmitType(Conteudo, ['id', 'criado_em', 'atualizado_em', 'publicado_em', 'criado_por', 'atualizado_por']) { }