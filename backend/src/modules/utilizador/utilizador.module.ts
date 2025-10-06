import { Module } from '@nestjs/common';
import { UtilizadorController } from './utilizador.controller';
import { UtilizadorService } from './utilizador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilizador, Anexo, Permissao, Grupo, Entidade } from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Utilizador,
      Anexo,
      Permissao,
      Grupo,
      Entidade,
    ])
  ],
  controllers: [UtilizadorController],
  providers: [UtilizadorService],
  exports: [UtilizadorService],
})
export class UtilizadorModule { }
