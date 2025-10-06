import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  // If there's no token or it's invalid, we don't throw — we simply allow the request
  // to continue with req.user === undefined/null. When a valid token is present
  // Passport will populate the user as usual.
  handleRequest(err: any, user: any, info: any) {
    // swallow errors to allow anonymous access; return user if present
    if (err) {
      return null;
    }
    return user || null;
  }
}
