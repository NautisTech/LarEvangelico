import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { UpdateConteudoDto } from './update-conteudo.dto';

export class BulkUpdateConteudoItemDto {
    @IsNumber()
    id: number;

    @ValidateNested()
    @Type(() => UpdateConteudoDto)
    data: UpdateConteudoDto;
}

export class BulkUpdateConteudoDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BulkUpdateConteudoItemDto)
    updates: BulkUpdateConteudoItemDto[];
}