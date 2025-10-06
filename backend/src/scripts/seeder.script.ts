import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Entidade, Utilizador, Permissao, Grupo, Marca, Modelo, Equipamento, Etiqueta, Conteudo, Comentario, Anexo } from '@/entities';
import { EntidadeSeeder, GrupoSeeder, PermissaoSeeder, UtilizadorSeeder, MarcaSeeder, ModeloSeeder, EquipamentoSeeder, EtiquetaSeeder, NoticiaSeeder, FaqSeeder, BannerSeeder } from '@/seeders';

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
            const permissaoRepo = this.dataSource.getRepository(Permissao);
            const entidadeRepo = this.dataSource.getRepository(Entidade);

            const permissaoCount = await permissaoRepo.count();
            const entidadeCount = await entidadeRepo.count();

            if (permissaoCount > 0 || entidadeCount > 0) {
                console.log('Seeders não executados: já existem dados.');
                return;
            }

            console.log('A iniciar seeders...');

            console.log('A iniciar seeder de permissões...');
            await PermissaoSeeder.run(permissaoRepo);

            console.log('A iniciar seeder de entidades...');
            await EntidadeSeeder.run(entidadeRepo);

            console.log('A iniciar seeder de grupos...');
            const grupoRepo = this.dataSource.getRepository(Grupo);
            await GrupoSeeder.run(grupoRepo, entidadeRepo, permissaoRepo);

            console.log('A iniciar seeder de utilizadores...');
            const utilizadorRepo = this.dataSource.getRepository(Utilizador);
            await UtilizadorSeeder.run(
                utilizadorRepo,
                entidadeRepo,
                permissaoRepo,
                grupoRepo,
            );

            console.log('A iniciar seeder de marcas...');
            const marcaRepo = this.dataSource.getRepository(Marca);
            await MarcaSeeder.run(marcaRepo);

            console.log('A iniciar seeder de modelos...');
            const modeloRepo = this.dataSource.getRepository(Modelo);
            await ModeloSeeder.run(modeloRepo, marcaRepo);

            console.log('A iniciar seeder de equipamentos...');
            const equipamentoRepo = this.dataSource.getRepository(Equipamento);
            await EquipamentoSeeder.run(equipamentoRepo, modeloRepo, entidadeRepo);

            console.log('A iniciar seeder de etiquetas...');
            const etiquetaRepo = this.dataSource.getRepository(Etiqueta);
            await EtiquetaSeeder.run(etiquetaRepo);

            const conteudoRepo = this.dataSource.getRepository(Conteudo);

            console.log('A iniciar seeder de notícias...');
            const comentarioRepo = this.dataSource.getRepository(Comentario);
            await NoticiaSeeder.run(conteudoRepo, entidadeRepo, utilizadorRepo, comentarioRepo, etiquetaRepo);

            console.log('A iniciar seeder de FAQs...');
            await FaqSeeder.run(conteudoRepo, entidadeRepo, utilizadorRepo, etiquetaRepo);

            console.log('A iniciar seeder de banners...');
            const anexoRepo = this.dataSource.getRepository(Anexo);
            await BannerSeeder.run(conteudoRepo, entidadeRepo, utilizadorRepo, anexoRepo, etiquetaRepo);

            console.log('Todos os seeders foram executados com sucesso!');
        } catch (error) {
            console.error('Erro ao executar seeders:', error);
            throw error;
        }
    }
}