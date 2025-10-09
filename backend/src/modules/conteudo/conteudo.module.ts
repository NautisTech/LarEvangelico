import { Module } from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { ConteudoController } from './conteudo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anexo, Conteudo, Etiqueta, Utilizador } from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conteudo, Etiqueta, Utilizador, Anexo])
  ],
  controllers: [ConteudoController],
  providers: [ConteudoService],
  exports: [ConteudoService],
})
export class ConteudoModule { }
