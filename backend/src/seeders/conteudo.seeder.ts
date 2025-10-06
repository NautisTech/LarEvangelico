import { Repository } from "typeorm";
import { Conteudo, Anexo, Comentario, Entidade, Etiqueta, Utilizador } from "@/entities";
import { TipoAnexo, TipoConteudo } from "@/utils";
import 'dotenv/config';

export class NoticiaSeeder {
    static async run(conteudoRepository: Repository<Conteudo>, entidadeRepository: Repository<Entidade>, utilizadorRepository: Repository<Utilizador>, comentarioRepository: Repository<Comentario>, etiquetaRepository: Repository<Etiqueta>) {

        const utilizadores = await utilizadorRepository.find();
        const entidades = await entidadeRepository.find();

        const noticias = [
            conteudoRepository.create({
                entidades: [entidades[0]],
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
                entidades: [entidades[1]],
                tipo: TipoConteudo.Noticia,
                titulo: 'Evento Anual',
                subtitulo: 'Participe do nosso evento anual',
                corpo: 'Junte-se a nós para um dia cheio de atividades, palestras e networking.',
                publico: true,
                criado_por: utilizadores[0],
                criado_em: new Date(),
            }),
        ];

        const savedNoticias = await conteudoRepository.save(noticias);

        const comentarios = [
            comentarioRepository.create({
                utilizador: utilizadores[0],
                conteudo: savedNoticias[0],
                texto: "Excelente notícia! Mal posso esperar para experimentar o novo produto.",
                criado_em: new Date(),

            }),
            comentarioRepository.create({
                utilizador: utilizadores[1],
                conteudo: savedNoticias[1],
                texto: "Estou ansioso para o evento! Será uma ótima oportunidade de networking.",
                criado_em: new Date(),
            }),
        ];

        await comentarioRepository.save(comentarios);

        console.log('Seeders de Notícia executados com sucesso!');
    }
}

export class FaqSeeder {
    static async run(conteudoRepository: Repository<Conteudo>, entidadeRepository: Repository<Entidade>, utilizadorRepository: Repository<Utilizador>, etiquetaRepository: Repository<Etiqueta>) {
        const utilizadores = await utilizadorRepository.find();
        const entidades = await entidadeRepository.find();

        const faqs = [
            conteudoRepository.create({
                entidades: [entidades[0]],
                tipo: TipoConteudo.Faq,
                titulo: 'Como posso resetar minha senha?',
                corpo: 'Para resetar sua senha, vá até a página de login e clique em "Esqueci minha senha".',
                publico: true,
                criado_por: utilizadores[1],
                criado_em: new Date(),
            }),
            conteudoRepository.create({
                entidades: [entidades[1]],
                tipo: TipoConteudo.Faq,
                titulo: 'Quais são os horários de atendimento?',
                corpo: 'Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.',
                publico: true,
                criado_por: utilizadores[0],
                criado_em: new Date(),
            }),
            conteudoRepository.create({
                entidades: [entidades[0]],
                tipo: TipoConteudo.Faq,
                titulo: 'Como posso contactar o suporte técnico?',
                corpo: 'Pode contactar o nosso suporte técnico através do email suporte@antoniosergio.pt ou através do telefone 935211223.',
                publico: true,
                criado_por: utilizadores[1],
                criado_em: new Date(),
            }),
            conteudoRepository.create({
                entidades: [entidades[1]],
                tipo: TipoConteudo.Faq,
                titulo: 'Onde posso encontrar o regulamento da escola?',
                corpo: 'O regulamento da escola está disponível na secção "Documentos" do nosso website ou pode ser solicitado na secretaria.',
                publico: true,
                criado_por: utilizadores[0],
                criado_em: new Date(),
            }),
            conteudoRepository.create({
                entidades: entidades,
                tipo: TipoConteudo.Faq,
                titulo: 'Como posso inscrever-me em atividades extracurriculares?',
                corpo: 'As inscrições para atividades extracurriculares abrem no início de cada período letivo. Pode inscrever-se na secretaria ou através da plataforma online.',
                publico: true,
                criado_por: utilizadores[1],
                criado_em: new Date(),
            }),
        ];

        await conteudoRepository.save(faqs);

        console.log('Seeders de FAQ executados com sucesso!');
    }
}

export class BannerSeeder {
    static async run(conteudoRepository: Repository<Conteudo>, entidadeRepository: Repository<Entidade>, utilizadorRepository: Repository<Utilizador>, anexoRepository: Repository<Anexo>, etiquetaRepository: Repository<Etiqueta>) {
        const utilizadores = await utilizadorRepository.find();
        const entidades = await entidadeRepository.find();

        const banners = [
            conteudoRepository.create({
                entidades,
                tipo: TipoConteudo.Banner,
                titulo: 'Início do Novo Ano Letivo',
                subtitulo: 'O AE António Sérgio inicia o novo ano letivo 2025/26!',
                criado_por: utilizadores[1],
                criado_em: new Date(),
                publicado_em: new Date(),
                data_inicio: null,
                data_fim: null,
                publico: true,
                etiquetas: [],
                anexos: [],
            }),
            conteudoRepository.create({
                entidades,
                tipo: TipoConteudo.Banner,
                titulo: 'Novo Website Publicado',
                subtitulo: 'O AE António Sérgio acaba de lançar o seu novo website!',
                criado_por: utilizadores[0],
                criado_em: new Date(),
                publicado_em: new Date(),
                data_inicio: null,
                data_fim: null,
                publico: true,
                etiquetas: [],
                anexos: [],
            }),
            conteudoRepository.create({
                entidades: [entidades[0]],
                tipo: TipoConteudo.Banner,
                titulo: 'Novos Cursos CTE',
                subtitulo: 'Os novos cursos CTE da ES António Sérgio apresentam a sua estrutura moderna!',
                criado_por: utilizadores[0],
                criado_em: new Date(),
                publicado_em: new Date(),
                data_inicio: null,
                data_fim: null,
                publico: true,
                etiquetas: [],
                anexos: [],
            }),
            conteudoRepository.create({
                entidades: entidades,
                tipo: TipoConteudo.Banner,
                titulo: 'Ser António Sérgio é Ser Futuro',
                subtitulo: 'Venha conhecer o nosso agrupamento e descubra porque ser António Sérgio é ser futuro!',
                criado_por: utilizadores[0],
                criado_em: new Date(),
                publicado_em: new Date(),
                data_inicio: null,
                data_fim: null,
                publico: true,
                etiquetas: [],
                anexos: [],
            }),
        ];

        const savedBanners = await conteudoRepository.save(banners);

        // Associar anexos aos banners
        const anexos = [
            anexoRepository.create({
                conteudo: savedBanners[0],
                tipo: TipoAnexo.JPG,
                valor: `${process.env.API_URL}/files/new-year.jpg`,
                nome: 'new-year.jpg',
                criado_em: new Date(),
                principal: true,
            }),
            anexoRepository.create({
                conteudo: savedBanners[1],
                tipo: TipoAnexo.JPG,
                valor: `${process.env.API_URL}/files/website.jpg`,
                nome: 'website.jpg',
                criado_em: new Date(),
                principal: true,
            }),
            anexoRepository.create({
                conteudo: savedBanners[2],
                tipo: TipoAnexo.JPG,
                valor: `${process.env.API_URL}/files/new-courses.jpg`,
                nome: 'new-courses.jpg',
                criado_em: new Date(),
                principal: true,
            }),
            anexoRepository.create({
                conteudo: savedBanners[3],
                tipo: TipoAnexo.JPG,
                valor: `${process.env.API_URL}/files/escola-as.jpg`,
                nome: 'escola-as.jpg',
                criado_em: new Date(),
                principal: true,
            }),
        ];

        await anexoRepository.save(anexos);

        console.log('Seeders de Banner executados com sucesso!');
    }
}