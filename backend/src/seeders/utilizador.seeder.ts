import { Repository } from 'typeorm';
import { Utilizador } from '@/entities';
import * as bcrypt from 'bcrypt';

export class UtilizadorSeeder {
    static async run(
        utilizadorRepository: Repository<Utilizador>,
    ) {

        const senhaHash = await bcrypt.hash('123456', 10);

        const utilizadores = [
            utilizadorRepository.create({
                nome: 'Administrador',
                username: 'admin',
                email: 'geral@antoniosergio.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: false,
            }),
            utilizadorRepository.create({
                nome: 'MicroLopes',
                username: 'microlopes',
                email: 'geral@microlopes.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: false,
            }),
            utilizadorRepository.create({
                nome: 'Nautis',
                username: 'nautis',
                email: 'geral@nautis.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: false,
            }),
            utilizadorRepository.create({
                nome: 'Guest',
                username: 'guest',
                email: '',
                telefone: '',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                pbc: false,
                ativo: true,
            }),
            utilizadorRepository.create({
                nome: 'David Lopes',
                username: 'davidLopes',
                email: 'geral@davidlopes.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: true,
            }),
            utilizadorRepository.create({
                nome: 'Ana Silva',
                username: 'anaSilva',
                email: 'ana.silva@exemplo.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: true,
            }),
            utilizadorRepository.create({
                nome: 'João Pereira',
                username: 'joaoPereira',
                email: 'joao.pereira@exemplo.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: true,
            }),
            utilizadorRepository.create({
                nome: 'Maria Fernandes',
                username: 'mariaFernandes',
                email: 'maria.fernandes@exemplo.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: true,
            }),
            utilizadorRepository.create({
                nome: 'Carlos Sousa',
                username: 'carlosSousa',
                email: 'carlos.sousa@exemplo.pt',
                senha: senhaHash,
                anexo: null,
                email_verificado_em: null,
                telefone_verificado_em: null,
                senha_alterada_em: null,
                token_recordar: null,
                ativo: true,
                pbc: true,
            })
        ];

        await utilizadorRepository.save(utilizadores);
        console.log('Seeders de Utilizador executados com sucesso!');
    }
}
