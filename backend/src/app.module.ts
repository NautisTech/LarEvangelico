import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SeederService } from '@/scripts';
import {
  AuthModule, UtilizadorModule, ConteudoModule, AnexoModule
} from '@/modules';

import 'dotenv/config';

const parseBoolean = (v?: string) => v === 'true';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/files', // Aceder aos ficheiros através de localhost:3000/files
    }),

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: (process.env.DB_HOST || '').trim(),                 // 72.60.187.213
      port: Number(process.env.DB_PORT || 1433),                // 11433
      username: (process.env.DB_USERNAME || '').trim(),         // prod_avf_login (recomendado)
      password: (process.env.DB_PASSWORD || '').trim(),         // MUITO importante o .trim()
      database: (process.env.DB_DATABASE || '').trim(),         // prod_as

      synchronize: parseBoolean(process.env.DB_SYNCHRONIZE || 'false'),
      dropSchema: parseBoolean(process.env.DB_DROP_SCHEMA || 'false'),
      logging: parseBoolean(process.env.DB_LOGGING || 'false'),
      logger: parseBoolean(process.env.DB_LOGGING || 'false') ? 'advanced-console' : undefined,
      migrationsRun: parseBoolean(process.env.DB_RUN_MIGRATIONS || 'false'),
      migrationsTransactionMode: 'each',
      migrations: ['dist/migrations/*.js'],
      migrationsTableName: 'migration',

      // Usa OU lista de entities OU autoLoadEntities. Evita duplicar.
      // Se manténs autoLoadEntities=true, podes remover a lista abaixo.
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // entities: [
      //   e.Anexo,
      //   e.Utilizador,
      //   e.Conteudo,
      // ],


      // Opções **TLS/TDS** (Tedious)
      options: {
        // Como ligas por IP e sem CA: deixa encrypt=false OU usa hostname+cert e põe true.
        encrypt: process.env.NODE_ENV === 'production' ? true : false,
        trustServerCertificate: process.env.NODE_ENV !== 'production', // evita handshake chato
        enableArithAbort: true,
      },

      // Opções **mssql driver** (pool, timeouts) → vão em `extra`
      extra: {
        pool: {
          max: Number(process.env.DB_POOL_MAX || 10),
          min: Number(process.env.DB_POOL_MIN || 2),
          idleTimeoutMillis: Number(process.env.DB_POOL_IDLE || 10000),
        },
        connectionTimeout: Number(process.env.DB_POOL_ACQUIRE || 15000), // ms
        requestTimeout: 30000, // ms
      },
    }),

    UtilizadorModule,
    AuthModule,
    ConteudoModule,
    AnexoModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule { }