import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { TipoAnexo } from '@/utils';
import { Conteudo } from '@/entities';

@Entity('anexos')
export class Anexo {
    @PrimaryGeneratedColumn('increment')
    id: number; // Identificador único (chave primária)

    @ManyToOne(() => Conteudo, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'conteudo_id' })
    conteudo: Conteudo | null;

    @Column({ type: 'nvarchar', length: 255 })
    nome: string; // Nome do anexo

    @Column({ type: 'nvarchar', length: 500 })
    valor: string; // Valor do anexo (URL ou Base64)

    @Column({
        type: 'nvarchar',
        length: 10,
        enum: TipoAnexo,
        nullable: true,
    })
    tipo: TipoAnexo | null; // Tipo do anexo (opcional), com validação de enum

    @Column({ type: 'int', nullable: true })
    ordem: number | null; // Ordem do anexo (opcional)

    @Column({ type: 'int', nullable: true })
    tamanho: number | null; // Tamanho do anexo em bytes (opcional)

    @Column({ type: 'bit', default: false })
    principal: boolean; // Indica se é o anexo principal (true ou false)

    @Column({
        type: 'nvarchar', nullable: true, transformer: {
            to: (value: Record<string, any> | null) => (value ? JSON.stringify(value) : null),
            from: (value: string | null) => (value ? JSON.parse(value) : null),
        }
    })
    metadados: Record<string, any> | null; // Metadados adicionais (opcional)

    @CreateDateColumn({ type: 'datetime2', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    criado_em: Date; // Data de criação

    @UpdateDateColumn({ type: 'datetime2', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    atualizado_em: Date | null; // Data da última atualização
}
