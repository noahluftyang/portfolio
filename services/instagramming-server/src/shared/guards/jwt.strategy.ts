import { UnauthorizedException } from '@nestjs/common';
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
    console.log(payload);
    // const user = await this.accountService.validateUser(payload);
    // if (!user) {
    //   return done(new UnauthorizedException(), false);
    // }
    // done(null, user);
  }
}
