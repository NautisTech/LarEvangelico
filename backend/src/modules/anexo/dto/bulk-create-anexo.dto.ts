import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { CreateAnexoDto } from './create-anexo.dto';

export class BulkCreateAnexoItemDto {
    @IsNumber()
    id: number;

    @ValidateNested()
    @Type(() => CreateAnexoDto)
    data: CreateAnexoDto;
}

export class BulkCreateAnexoDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BulkCreateAnexoItemDto)
    anexos: BulkCreateAnexoItemDto[];
}