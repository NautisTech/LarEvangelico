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
                email: 'geral@larevangelico.pt',
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
        ];

        await utilizadorRepository.save(utilizadores);
        console.log('Seeders de Utilizador executados com sucesso!');
    }
}
