import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    ManyToMany,
    JoinTable
} from 'typeorm';
import { Anexo } from '.';
import { Copy } from '@nestjs/common';

@Entity('utilizadores')
@Index('IX_utilizadores_email', ['email'])  // Índice único para 'email'
@Index('IX_utilizadores_telefone', ['telefone'])  // Índice único para 'telefone'
@Index('IX_utilizadores_email_ativo', ['email', 'ativo'])  // Índice para 'email' e 'ativo' na autenticação
export class Utilizador {
    @PrimaryGeneratedColumn('increment')
    id: number; // Identificador único (chave primária)

    @ManyToOne(() => Anexo, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'anexo_id' })
    anexo: Anexo | null; // Relacionamento com a tabela 'anexos'

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    nome: string | null; // Nome da Pessoa

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    username: string | null; // Nome do utilizador

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    email: string | null; // Email do utilizador (único)

    @Column({ type: 'nvarchar', length: 20, nullable: true })
    telefone: string; // Telefone do utilizador (único)

    @Column({ type: 'datetime2', nullable: true })
    telefone_verificado_em: Date | null; // Data de verificação do telefone

    @Column({ type: 'datetime2', nullable: true })
    email_verificado_em: Date | null; // Data de verificação do email

    @Column({ type: 'nvarchar', length: 255 })
    senha: string; // Senha do utilizador

    @Column({ type: 'datetime2', nullable: true })
    senha_alterada_em: Date | null; // Data da última alteração da senha

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    token_recordar: string | null; // Token para lembrar o login

    @Column({ type: 'bit', default: true })
    ativo: boolean; // Indica se o utilizador está ativo

    @Column({ type: 'datetime2', nullable: true })
    ultimo_login: Date | null; // Data do último login

    @Column({ type: 'nvarchar', length: 45, nullable: true })
    ultimo_ip: string | null; // Último endereço IP usado no login

    @Column({ update: false, default: true })
    pbc: boolean;

    @CreateDateColumn({ type: 'datetime2', default: () => 'CURRENT_TIMESTAMP', nullable: true, update: false })
    criado_em: Date; // Data de criação

    @UpdateDateColumn({ type: 'datetime2', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    atualizado_em: Date | null; // Data da última atualização
}
