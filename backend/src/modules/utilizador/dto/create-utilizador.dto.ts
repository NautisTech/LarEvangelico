import { OmitType } from '@nestjs/mapped-types';
import { Utilizador } from '@/entities';

export class CreateUtilizadorDto extends OmitType(Utilizador, ['id', 'criado_em', 'atualizado_em', 'ultimo_login', 'ultimo_ip']) { }