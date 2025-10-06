import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UtilizadorService } from '@/modules/utilizador/utilizador.service';

import 'dotenv/config';

@Injectable()
export class OptimizedJwtStrategy extends PassportStrategy(Strategy, 'optimized-jwt') {
    // In-memory cache for user validation
    private userCache = new Map<string, { user: any; timestamp: number }>();
    private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

    constructor(private utilizadorService: UtilizadorService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!,
        });
    }

    async validate(payload: JwtPayload) {
        const cacheKey = `user:${payload.username}`;
        const cached = this.userCache.get(cacheKey);
        const now = Date.now();

        // Return cached user if still valid
        if (cached && (now - cached.timestamp) < this.CACHE_DURATION) {
            return cached.user;
        }

        // Use lightweight method for JWT validation
        const user = await this.utilizadorService.findByUsernameForAuth(payload.username);
        if (!user || !user.ativo) {
            return null;
        }

        // Cache the result
        this.userCache.set(cacheKey, {
            user,
            timestamp: now
        });

        // Clean up expired entries occasionally (1 in 100 requests)
        if (Math.random() < 0.01) {
            this.cleanupCache();
        }

        return user;
    }

    private cleanupCache() {
        const now = Date.now();
        for (const [key, cached] of this.userCache.entries()) {
            if (now - cached.timestamp > this.CACHE_DURATION) {
                this.userCache.delete(key);
            }
        }
    }
}