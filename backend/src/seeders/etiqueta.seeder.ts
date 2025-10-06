import { Repository } from 'typeorm';
import { Etiqueta } from '@/entities';

export class EtiquetaSeeder {
    static async run(
        repository: Repository<Etiqueta>,
    ) {

        const etiquetas = [
            repository.create({ nome: 'Educação' }),
            repository.create({ nome: 'Saúde' }),
            repository.create({ nome: 'Tecnologia' }),
            repository.create({ nome: 'Desporto' }),
            repository.create({ nome: 'Entretenimento' }),
            repository.create({ nome: 'Cultura' }),
            repository.create({ nome: 'Ambiente' }),
        ];
        await repository.save(etiquetas);
        console.log('Seeders de Etiquetas executados com sucesso!');
    }
}
