import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccountService } from '../shared/services/mod';

const jwtData = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'TODO',
};

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly accountService: AccountService) {
    super(jwtData);
  }

  async validate(payload: any, done: any) {
    const user = await this.accountService.validateUser(payload);

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}
