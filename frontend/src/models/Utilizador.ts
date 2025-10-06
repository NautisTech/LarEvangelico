import { Modulo } from '@/utils';
import { Anexo, Entidade, Grupo, Permissao } from '.';

export class Utilizador {
  id: number | null;  // Identificador único (chave primária)

  anexo: Anexo | null;  // Relacionamento com a tabela 'anexos'

  nome: string | null;  // Nome da pessoa

  username: string | null;  // Nome de utilizador (único)

  email: string | null;  // Email do utilizador (único)

  telefone: string | null;  // Número de telefone do utilizador (único)

  telefone_verificado_em: Date | null;  // Data de verificação do telefone

  email_verificado_em: Date | null;  // Data de verificação do email

  senha: string | null;  // Senha do utilizador

  senha_alterada_em: Date | null;  // Data da última alteração da senha

  token_recordar: string | null;  // Token para lembrar o login

  ativo: boolean;  // Indica se o utilizador está ativo

  entidades: Entidade[] | null;  // Relacionamento com Entidade_Utilizador (Muitos para Muitos)

  grupos: Grupo[] | null;  // Relacionamento com Grupo_Utilizador (Muitos para Muitos)

  permissoes: Permissao[] | null;  // Relacionamento com Utilizador_Permissao (Muitos para Muitos)

  ultimo_login: Date | null;  // Data do último login

  ultimo_ip: string | null;  // Último endereço IP usado no login

  criado_em: Date;  // Data de criação

  atualizado_em: Date | null;  // Data da última atualização

  constructor(data: Partial<Utilizador>) {
    this.id = data.id ?? null;
    this.nome = data.nome ?? null;
    this.username = data.username ?? null;
    this.email = data.email ?? null;
    this.telefone = data.telefone ?? null;
    this.telefone_verificado_em = data.telefone_verificado_em ?? null;
    this.senha = data.senha ?? null;
    this.anexo = data.anexo ?? null;
    this.email_verificado_em = data.email_verificado_em ?? null;
    this.senha_alterada_em = data.senha_alterada_em ?? null;
    this.token_recordar = data.token_recordar ?? null;
    this.ativo = data.ativo ?? true;
    this.entidades = data.entidades ?? [];
    this.grupos = data.grupos ?? null;
    this.permissoes = data.permissoes ?? null;
    this.ultimo_login = data.ultimo_login ?? null;
    this.ultimo_ip = data.ultimo_ip ?? null;
    this.criado_em = data.criado_em ?? new Date();
    this.atualizado_em = data.atualizado_em ?? null;
  }

  isEmailVerificado(): boolean {
    return this.email_verificado_em !== null;
  }

  getNome(): string {
    return this.nome ?? this.username ?? 'Utilizador';
  }

  getUsername(): string {
    return this.username ?? this.nome ?? 'utilizador';
  }

  pertenceAoGrupo(nomeGrupo: string): boolean {
    return this.grupos?.some(grupo => grupo.nome === nomeGrupo) ?? false;
  }

  getUtilizadorModulos(): Modulo[] {
    const modulosSet = new Set<Modulo>();
    this.permissoes?.forEach(permissao => {
      modulosSet.add(permissao.modulo);
    });

    this.grupos?.forEach(grupo => {
      grupo.permissoes?.forEach(permissao => {
        modulosSet.add(permissao.modulo);
      });
    });
    return Array.from(modulosSet);
  }
}
