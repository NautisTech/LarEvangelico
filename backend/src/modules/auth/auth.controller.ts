import { Controller, Post, Body, UseGuards, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUtilizador(loginDto.username, loginDto.senha);
    if (!user) {
      throw new HttpException('Credenciais inválidas', 401);
    }
    return this.authService.login(user);
  }
}
