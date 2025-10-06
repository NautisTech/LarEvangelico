import { Injectable, HttpException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'username' });
    }

    async validate(username: string, senha: string): Promise<any> {
        const user = await this.authService.validateUtilizador(username, senha);
        if (!user) {
            throw new HttpException('Credenciais inválidas', 401);
        }
        return user;
    }
}
