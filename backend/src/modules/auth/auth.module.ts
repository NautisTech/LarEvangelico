import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilizadorModule } from '../utilizador/utilizador.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { OptimizedJwtStrategy } from './optimized-jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UtilizadorModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET!,  // Utilize uma chave secreta segura em produção
      signOptions: { expiresIn: '60m' }, // Tempo de expiração do token
    }),
  ],
  providers: [AuthService, JwtStrategy, OptimizedJwtStrategy, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
