import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Request } from '@nestjs/common';
import { UtilizadorService } from './utilizador.service';
import { CreateUtilizadorDto } from './dto/create-utilizador.dto';
import { UpdateUtilizadorDto } from './dto/update-utilizador.dto';
import { BulkUpdateUtilizadorDto } from './dto/bulk-update-utilizador.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('utilizador')
export class UtilizadorController {
  constructor(private readonly utilizadorService: UtilizadorService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateUtilizadorDto) {
    return this.utilizadorService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.utilizadorService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('base')
  findAllBase() {
    return this.utilizadorService.findAllBase();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findProfile(@Request() req: any) {
    return this.utilizadorService.findById(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile/base')
  findProfileBase(@Request() req: any) {
    return this.utilizadorService.findByIdBase(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('permissoes')
  async getUserPermissoes(@Request() req: any) {
    return this.utilizadorService.getUserPermissoes(req.user.id);
  }


  @UseGuards(JwtAuthGuard)
  @Get('id/:id')
  findById(@Param('id') id: string) {
    return this.utilizadorService.findById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('id/:id/base')
  findByIdBase(@Param('id') id: string) {
    return this.utilizadorService.findByIdBase(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('entidade/:entidadeId')
  findByEntidade(@Param('entidadeId') entidadeId: string) {
    return this.utilizadorService.findByEntidade(+entidadeId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('entidade/:entidadeId/base')
  findByEntidadeBase(@Param('entidadeId') entidadeId: string) {
    return this.utilizadorService.findByEntidadeBase(+entidadeId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.utilizadorService.findByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUtilizadorDto: UpdateUtilizadorDto) {
    return this.utilizadorService.update(+id, updateUtilizadorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/update')
  bulkUpdate(@Body() bulkUpdateUtilizadorDto: BulkUpdateUtilizadorDto) {
    return this.utilizadorService.bulkUpdate(bulkUpdateUtilizadorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilizadorService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/activate')
  bulkActivate(@Body('ids') ids: string[]) {
    return this.utilizadorService.bulkActivate(ids.map(id => +id));
  }

  @UseGuards(JwtAuthGuard)
  @Put('bulk/deactivate')
  bulkDeactivate(@Body('ids') ids: string[]) {
    return this.utilizadorService.bulkDeactivate(ids.map(id => +id));
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/activate')
  activate(@Param('id') id: string) {
    return this.utilizadorService.activate(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/deactivate')
  deactivate(@Param('id') id: string) {
    return this.utilizadorService.deactivate(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/change-password')
  changePassword(@Param('id') id: string, @Body('senha') senha: string) {
    return this.utilizadorService.changePassword(+id, senha);
  }
}
