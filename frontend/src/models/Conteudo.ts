import { Utilizador, Etiqueta, Anexo } from '@/models';
import { TipoConteudo } from '@/utils';

export class Conteudo {
    id: number | null; // Identificador único (chave primária)

    tipo: TipoConteudo | null; // Tipo do conteúdo (opcional)

    titulo: string; // Título do conteúdo

    subtitulo: string | null; // Subtítulo do conteúdo

    corpo: string | null; // Descrição detalhada do conteúdo

    publicado_em: Date | null; // Data da publicação

    data_inicio: Date | null; // Data de início

    data_fim: Date | null; // Data de término

    publico: boolean;

    visualizacoes: number | null; // Número de visualizações

    criado_por: Utilizador; // Relacionamento com a tabela 'utilizadores' (criador)

    atualizado_por: Utilizador | null; // Relacionamento com a tabela 'utilizadores' (criador)

    criado_em: Date; // Data de criação

    atualizado_em: Date | null; // Data da última atualização

    etiquetas: Etiqueta[]; // Relacionamento com Conteudo_Etiqueta (Muitos para Muitos)

    anexos: Anexo[] | null;

    constructor(data: Partial<Conteudo> = {}) {
        this.id = data.id ?? null;
        this.tipo = data.tipo ?? null;
        this.titulo = data.titulo ?? '';
        this.subtitulo = data.subtitulo ?? null;
        this.corpo = data.corpo ?? null;
        this.publicado_em = data.publicado_em ?? null;
        this.data_inicio = data.data_inicio ?? null;
        this.data_fim = data.data_fim ?? null;
        this.publico = data.publico ?? false;
        this.visualizacoes = data.visualizacoes ?? null;
        this.criado_por = data.criado_por!;
        this.atualizado_por = data.atualizado_por ?? null;
        this.criado_em = data.criado_em ?? new Date();
        this.atualizado_em = data.atualizado_em ?? null;
        this.etiquetas = data.etiquetas ?? [];
        this.anexos = data.anexos ?? [];
    }
}
