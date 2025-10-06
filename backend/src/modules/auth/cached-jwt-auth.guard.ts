import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class CachedJwtAuthGuard extends AuthGuard('jwt') {
    // Cache for user validation results (in-memory cache)
    private userCache = new Map<string, { user: any; timestamp: number }>();
    private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromRequest(request);

        if (token) {
            const cached = this.userCache.get(token);
            const now = Date.now();

            // Return cached user if still valid
            if (cached && (now - cached.timestamp) < this.CACHE_DURATION) {
                request.user = cached.user;
                return true;
            }
        }

        // Proceed with normal JWT validation
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
        if (user) {
            const request = context.switchToHttp().getRequest();
            const token = this.extractTokenFromRequest(request);

            if (token) {
                // Cache the validated user
                this.userCache.set(token, {
                    user,
                    timestamp: Date.now()
                });
            }
        }

        return super.handleRequest(err, user, info, context);
    }

    private extractTokenFromRequest(request: any): string | null {
        const authHeader = request.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            return authHeader.substring(7);
        }
        return null;
    }

    // Clean up expired cache entries periodically
    private cleanupCache() {
        const now = Date.now();
        for (const [token, cached] of this.userCache.entries()) {
            if (now - cached.timestamp > this.CACHE_DURATION) {
                this.userCache.delete(token);
            }
        }
    }
}