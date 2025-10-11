import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request, ParseArrayPipe } from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { BulkUpdateConteudoDto } from './dto/bulk-update-conteudo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('conteudo')
export class ConteudoController {
  constructor(private readonly conteudoService: ConteudoService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':tipo')
  findTipo(@Param('tipo') tipo: string) {
    return this.conteudoService.findTipo(tipo);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.conteudoService.findAll();
  }

  @Get('/public/:tipo')
  findAllPublic(@Param('tipo') tipo: string) {
    return this.conteudoService.findTipo(tipo, true);
  }

  @UseGuards(JwtAuthGuard)
  @Get('id/:id')
  findById(@Param('id') id: string) {
    return this.conteudoService.findById(+id, false);
  }

  @Get('public/id/:id')
  findByIdPublic(@Param('id') id: string) {
    return this.conteudoService.findById(+id, true);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createConteudoDto: CreateConteudoDto, @Request() req: any) {
    return this.conteudoService.create(createConteudoDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/update')
  bulkUpdate(@Body() bulkUpdateConteudoDto: BulkUpdateConteudoDto, @Request() req: any) {
    return this.conteudoService.bulkUpdate(bulkUpdateConteudoDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/approve')
  bulkapprove(@Body('ids') ids: string[], @Request() req: any) {
    return this.conteudoService.bulkapprove(ids.map(id => +id), req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/disapprove')
  bulkDisapprove(@Body('ids') ids: string[], @Request() req: any) {
    return this.conteudoService.bulkDisapprove(ids.map(id => +id), req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('bulk/delete')
  bulkDelete(@Body('ids') ids: string[]) {
    return this.conteudoService.bulkDelete(ids.map(id => +id));
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateConteudoDto: UpdateConteudoDto, @Request() req: any) {
    return this.conteudoService.update(+id, updateConteudoDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/approve')
  approve(@Param('id') id: string, @Request() req: any) {
    return this.conteudoService.approve(+id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/disapprove')
  disapprove(@Param('id') id: string, @Request() req: any) {
    return this.conteudoService.disapprove(+id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.conteudoService.delete(+id);
  }
}
