import { Module } from '@nestjs/common';
import { AnexoService } from './anexo.service';
import { AnexoController } from './anexo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anexo, Conteudo } from '@/entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([Anexo, Conteudo])
    ],
    controllers: [AnexoController],
    providers: [AnexoService],
    exports: [AnexoService]
})
export class AnexoModule { }
