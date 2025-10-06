import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilizadorService } from '@/modules/utilizador/utilizador.service';
import { JwtPayload } from './jwt-payload.interface';
import { Utilizador } from '@/entities';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private utilizadorService: UtilizadorService,
        private jwtService: JwtService,
    ) { }

    async validateUtilizador(username: string, senha: string): Promise<any> {
        const utilizador = await this.utilizadorService.findByUsernameForAuth(username);
        if (utilizador && utilizador.ativo) {
            const fullUtilizador = await this.utilizadorService.findByUsername(username);
            if (bcrypt.compareSync(senha, fullUtilizador.senha)) {
                return fullUtilizador;
            }
        }
        return null;
    }

    async login(utilizador: Utilizador) {
        if (!utilizador || !utilizador.username) {
            throw new HttpException('Payload inválido', 400);
        }
        const payload: JwtPayload = { username: utilizador.username, sub: utilizador.id };
        await this.utilizadorService.registarLogin(utilizador.id, utilizador.ultimo_ip || '');
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
