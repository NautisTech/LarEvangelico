import { Repository } from "typeorm";
import { Conteudo, Anexo, Etiqueta, Utilizador } from "@/entities";
import { TipoAnexo, TipoConteudo } from "@/utils";
import 'dotenv/config';

export class NoticiaSeeder {
    static async run(conteudoRepository: Repository<Conteudo>, utilizadorRepository: Repository<Utilizador>, etiquetaRepository: Repository<Etiqueta>) {

        const utilizadores = await utilizadorRepository.find();

        const noticias = [
            conteudoRepository.create({
                tipo: TipoConteudo.Noticia,
                titulo: 'Lançamento de Produto',
                subtitulo: 'Novo produto revolucionário no mercado',
                corpo: 'Estamos entusiasmados em anunciar o lançamento do nosso novo produto, que promete transformar a experiência dos nossos clientes.',
                criado_por: utilizadores[1],
                publicado_em: null,
                data_inicio: null,
                publico: false,
                data_fim: null,
                etiquetas: [],
                criado_em: new Date(),
            }),
            conteudoRepository.create({
                tipo: TipoConteudo.Noticia,
                titulo: 'Evento Anual',
                subtitulo: 'Participe do nosso evento anual',
                corpo: 'Junte-se a nós para um dia cheio de atividades, palestras e networking.',
                publico: true,
                criado_por: utilizadores[0],
                criado_em: new Date(),
            }),
        ];

        await conteudoRepository.save(noticias);
        console.log('Seeders de Notícia executados com sucesso!');
    }
}