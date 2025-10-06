import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UtilizadorService } from '@/modules/utilizador/utilizador.service';

import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private utilizadorService: UtilizadorService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!, // Chave secreta para assinar o JWT
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.utilizadorService.findByUsernameForAuth(payload.username);
        if (!user || !user.ativo) {
            return null;
        }
        return user;
    }
}
