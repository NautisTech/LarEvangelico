import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Request, ParseArrayPipe } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { BulkUpdateEtiquetaDto } from './dto/bulk-update-etiqueta.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('etiqueta')
export class EtiquetaController {
  constructor(private readonly etiquetaService: EtiquetaService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.etiquetaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.etiquetaService.findById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEtiquetaDto: CreateEtiquetaDto) {
    return this.etiquetaService.create(createEtiquetaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEtiquetaDto: UpdateEtiquetaDto) {
    return this.etiquetaService.update(+id, updateEtiquetaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/update')
  bulkUpdate(@Body() bulkUpdateEtiquetaDto: BulkUpdateEtiquetaDto) {
    return this.etiquetaService.bulkUpdate(bulkUpdateEtiquetaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.etiquetaService.delete(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('bulk/delete')
  bulkDelete(@Body('ids') ids: string[]) {
    return this.etiquetaService.bulkDelete(ids.map(id => +id));
  }
}
