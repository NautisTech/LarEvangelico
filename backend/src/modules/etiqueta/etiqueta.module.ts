import { Module } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { EtiquetaController } from './etiqueta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etiqueta } from '@/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Etiqueta])
  ],
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  exports: [EtiquetaService],
})
export class EtiquetaModule { }
