import { Module } from '@nestjs/common';
import { UtilizadorController } from './utilizador.controller';
import { UtilizadorService } from './utilizador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilizador, Anexo } from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Utilizador,
      Anexo,
    ])
  ],
  controllers: [UtilizadorController],
  providers: [UtilizadorService],
  exports: [UtilizadorService],
})
export class UtilizadorModule { }
