import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { compare } from 'bcrypt';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/mod';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, pass: string) {
    console.log('enter!!', email, pass);
    const _user = await this.userService.findByEmail(email);

    if (!_user) {
      throw new UnauthorizedException();
    }

    if (!compare(pass, _user.password)) {
      throw new UnauthorizedException();
    }

    const { password, ...user } = _user;

    return user;
  }
}
