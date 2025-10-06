import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { UpdateUtilizadorDto } from './update-utilizador.dto';

export class BulkUpdateUtilizadorItemDto {
    @IsNumber()
    id: number;

    @ValidateNested()
    @Type(() => UpdateUtilizadorDto)
    data: UpdateUtilizadorDto;
}

export class BulkUpdateUtilizadorDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BulkUpdateUtilizadorItemDto)
    updates: BulkUpdateUtilizadorItemDto[];
}