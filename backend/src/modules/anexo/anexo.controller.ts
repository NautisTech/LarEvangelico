import {
    Controller,
    Post,
    Delete,
    Param,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
    Body,
    UseGuards,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { AnexoService } from './anexo.service';
import { CreateAnexoDto } from './dto/create-anexo.dto';
import { UpdateAnexoDto } from './dto/update-anexo.dto';
import { BulkCreateAnexoDto } from './dto/bulk-create-anexo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('anexo')
export class AnexoController {
    constructor(private readonly anexoService: AnexoService) { }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Multer.File, @Body("dto") dtoString: string) {
        try {
            const dto = typeof dtoString === 'string' ? JSON.parse(dtoString) : dtoString;
            return this.anexoService.create(file, dto);
        } catch (error) {
            throw error;
        }
    }

    @Post('bulk/create')
    @UseInterceptors(FilesInterceptor('files'))
    async uploadMany(@UploadedFiles() files: Multer.File[], @Body("dto") dto: BulkCreateAnexoDto) {
        return this.anexoService.bulkCreate(files, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.anexoService.delete(id);
    }

    @Delete('bulk/delete')
    async bulkDelete(@Body('ids') ids: number[]) {
        return this.anexoService.bulkDelete(ids);
    }
}
