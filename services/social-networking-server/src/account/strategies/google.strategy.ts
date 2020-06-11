import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { UserService } from 'src/user/mod';

@Injectable()
export class GoogleStrategy extends PassportStrategy(OAuth2Strategy) {
  constructor(configService: ConfigService, private userService: UserService) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile'],
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
