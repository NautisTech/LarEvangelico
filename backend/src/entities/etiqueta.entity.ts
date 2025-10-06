import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Conteudo } from '.';

@Entity('etiquetas')
export class Etiqueta {
    @PrimaryGeneratedColumn('increment')
    id: number; // Identificador único (chave primária)

    @Column({ type: 'nvarchar', length: 50, unique: true })
    nome: string; // Nome da etiqueta

    // Relacionamento com Conteudo_Etiqueta(Muitos para Muitos)
    @ManyToMany(() => Conteudo, (conteudo) => conteudo.etiquetas, { cascade: true, onDelete: 'CASCADE' })
    conteudos: Conteudo[];
}