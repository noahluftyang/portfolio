import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { UserService } from 'src/user/mod';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: configService.get<string>('FACEBOOK_APP_ID'),
      clientSecret: configService.get<string>('FACEBOOK_APP_SECRET'),
      callbackURL: configService.get<string>('FACEBOOK_CALLBACK_URL'),
    });
  }

  async validate(accessToken, refreshToken, profile, done) {
    console.log(accessToken, refreshToken, profile, done);

    try {
      const user = await this.userService.findBySocialId(profile.id);
      console.log(user);

      done(null, user);
    } catch (error) {
      console.error('enter!', error);
      done(new UnauthorizedException('Cannot get Google Account'));
    }
  }
}
