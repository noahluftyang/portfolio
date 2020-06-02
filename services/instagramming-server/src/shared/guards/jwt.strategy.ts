import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from '../services/mod';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: 'secret',
    });
  }

  async validate(payload: any, done: any) {
    done(null, {
      id: payload.id,
      email: payload.email,
      username: payload.username,
    });
  }
}
