import { Conteudo } from ".";

export class Etiqueta {
    id: number | null; // Identificador único (chave primária)

    nome: string; // Nome da etiqueta

    conteudos: Conteudo[]; // Relacionamento com Conteudo_Etiqueta(Muitos para Muitos)

    constructor(data: Partial<Etiqueta> = {}) {
        this.id = data.id ?? null;
        this.nome = data.nome ?? '';
        this.conteudos = data.conteudos ?? [];
    }
}