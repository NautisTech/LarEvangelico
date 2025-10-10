import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Index, JoinTable, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Etiqueta, Utilizador, Anexo } from '.';
import { TipoConteudo } from '@/utils';

@Entity('conteudos')
export class Conteudo {
    @PrimaryGeneratedColumn('increment')
    id: number; // Identificador único (chave primária)

    @Column({
        type: 'nvarchar',
        length: 50,
        enum: TipoConteudo,
        nullable: true,
    })
    tipo: TipoConteudo | null;

    @Column({ type: 'text' })
    titulo: string; // Título do conteúdo

    @Column({ type: 'text', nullable: true })
    subtitulo: string; // Subtítulo do conteúdo

    @Column({ type: 'text', nullable: true })
    corpo: string; // Descrição detalhada do conteúdo

    @Column({ type: 'datetime2', nullable: true })
    publicado_em: Date | null; // Data da publicação

    @Column({ type: 'datetime2', nullable: true })
    data_inicio: Date | null; // Data de início

    @Column({ type: 'datetime2', nullable: true })
    data_fim: Date | null; // Data de término

    @Column({ type: 'bit', default: false, nullable: true })
    publico: boolean;

    @Column({ type: 'int', nullable: true })
    visualizacoes: number | null; // Número de visualizações

    @Column({ type: 'int', nullable: true })
    objetivo: number | null; // Número de visualizações

    @Column({ type: 'int', nullable: true })
    angariado: number | null; // Número de visualizações

    @Column({ type: 'bit', default: false, nullable: true })
    afixado: boolean;

    @ManyToOne(() => Utilizador)
    @JoinColumn({ name: 'criado_por_id' })
    criado_por: Utilizador; // Relacionamento com a tabela 'utilizadores' (criador)

    @ManyToOne(() => Utilizador, { nullable: true })
    @JoinColumn({ name: 'atualizado_por_id' })
    atualizado_por: Utilizador | null; // Relacionamento com a tabela 'utilizadores' (criador)

    @CreateDateColumn({ type: 'datetime2', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    criado_em: Date; // Data de criação

    @UpdateDateColumn({ type: 'datetime2', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    atualizado_em: Date | null; // Data da última atualização

    // Relacionamento com Conteudo_Etiqueta (Muitos para Muitos)
    @ManyToMany(() => Etiqueta, (etiqueta) => etiqueta.conteudos)
    @JoinTable({
        name: 'conteudo_etiqueta',
        joinColumn: { name: 'conteudo_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'etiqueta_id', referencedColumnName: 'id' },
    })
    etiquetas: Etiqueta[];

    @OneToMany(() => Anexo, (anexo) => anexo.conteudo, { cascade: true, onDelete: 'CASCADE' })
    anexos: Anexo[] | null; // Relacionamento com a tabela 'anexos'
}