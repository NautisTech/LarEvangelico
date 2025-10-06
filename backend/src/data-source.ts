import { DataSource } from 'typeorm';
import 'dotenv/config';

// Função para converter string para boolean
const parseBoolean = (value: string | undefined): boolean => {
  return value === 'true';
};

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  
  // Configurações controladas por variáveis de ambiente
  synchronize: parseBoolean(process.env.DB_SYNCHRONIZE),
  dropSchema: parseBoolean(process.env.DB_DROP_SCHEMA),
  logging: parseBoolean(process.env.DB_LOGGING),
  logger: parseBoolean(process.env.DB_LOGGING) ? "advanced-console" : undefined,
  
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  migrationsTransactionMode: 'each',
  migrationsRun: parseBoolean(process.env.DB_RUN_MIGRATIONS),
  
  // Configurações de pooling para otimização de performance
  pool: {
    max: Number(process.env.DB_POOL_MAX) || 10,
    min: Number(process.env.DB_POOL_MIN) || 2,
    acquireTimeoutMillis: Number(process.env.DB_POOL_ACQUIRE) || 30000,
    idleTimeoutMillis: Number(process.env.DB_POOL_IDLE) || 10000,
  },
  
  options: {
    encrypt: process.env.NODE_ENV === 'production',
    enableArithAbort: true,
    trustServerCertificate: process.env.NODE_ENV !== 'production',
    // Configurações adicionais de performance para SQL Server
    connectTimeout: 30000,
  },
});
