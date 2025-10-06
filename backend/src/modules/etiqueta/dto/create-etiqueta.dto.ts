import { OmitType } from '@nestjs/mapped-types';
import { Etiqueta } from '@/entities';

export class CreateEtiquetaDto extends OmitType(Etiqueta, ['id']) { }