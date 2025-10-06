import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { UpdateEtiquetaDto } from './update-etiqueta.dto';

export class BulkUpdateEtiquetaItemDto {
    @IsNumber()
    id: number;

    @ValidateNested()
    @Type(() => UpdateEtiquetaDto)
    data: UpdateEtiquetaDto;
}

export class BulkUpdateEtiquetaDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BulkUpdateEtiquetaItemDto)
    updates: BulkUpdateEtiquetaItemDto[];
}