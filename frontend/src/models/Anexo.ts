import { TipoAnexo } from '@/utils';
import { Conteudo } from './Conteudo';

export class Anexo {
    id: number | null;  // Identificador único (chave primária)

    nome: string;  // Nome do anexo~

    conteudo: Conteudo | null;  // Relacionamento com a tabela 'conteudos' (opcional)

    valor: string;  // Valor do anexo (URL ou Base64)

    tipo: TipoAnexo | null;  // Tipo do anexo (opcional, com enum)

    ordem: number | null;  // Ordem do anexo (opcional)

    tamanho: number | null;  // Tamanho do anexo em bytes (opcional)

    principal: boolean;  // Indica se é o anexo principal 

    metadados: Record<string, any> | null;  // Metadados adicionais (opcional)

    criado_em: Date;  // Data de criação

    atualizado_em: Date | null;  // Data da última atualização

    constructor(data: Partial<Anexo> = {}) {
        this.id = data.id ?? null;
        this.nome = data.nome ?? "";
        this.conteudo = data.conteudo ?? null;
        this.valor = data.valor ?? "";
        this.tipo = data.tipo ?? null;
        this.ordem = data.ordem ?? null;
        this.tamanho = data.tamanho ?? null;
        this.principal = data.principal ?? false;
        this.metadados = data.metadados ?? null;
        this.criado_em = data.criado_em ?? new Date();
        this.atualizado_em = data.atualizado_em ?? null;
    }
}