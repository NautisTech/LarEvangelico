import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Utilizador, Etiqueta, Conteudo, Anexo } from '@/entities';
import { UtilizadorSeeder, EtiquetaSeeder, NoticiaSeeder } from '@/seeders';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        @InjectDataSource() private dataSource: DataSource
    ) { }

    async onModuleInit() {
        // Executar apenas em desenvolvimento e se não estivermos em modo de produção
        if (process.env.NODE_ENV !== 'production' && process.env.DB_RUN_MIGRATIONS === 'true') {
            console.log('A iniciar execução dos seeders...');
            try {
                await this.run();
            } catch (error) {
                console.error('Erro durante inicialização dos seeders:', error);
                throw error;
            }
        }
    }

    async run() {
        try {

            console.log('A iniciar seeders...');

            console.log('A iniciar seeder de utilizadores...');
            const utilizadorRepo = this.dataSource.getRepository(Utilizador);
            await UtilizadorSeeder.run(
                utilizadorRepo,
            );

            console.log('A iniciar seeder de etiquetas...');
            const etiquetaRepo = this.dataSource.getRepository(Etiqueta);
            await EtiquetaSeeder.run(etiquetaRepo);

            const conteudoRepo = this.dataSource.getRepository(Conteudo);

            console.log('A iniciar seeder de notícias...');
            await NoticiaSeeder.run(conteudoRepo, utilizadorRepo, etiquetaRepo);

            console.log('Todos os seeders foram executados com sucesso!');
        } catch (error) {
            console.error('Erro ao executar seeders:', error);
            throw error;
        }
    }
}