import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { compare } from 'bcrypt';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/mod';

type User = {
  id: number;
  email: string;
  password: string;
  username: string;
};

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    let _user: User;

    try {
      _user = await this.userService.findByEmail(email);
    } catch (error) {
      throw new Error(error);
    }

    if (!_user) {
      throw new UnauthorizedException();
    }

    if (!compare(password, _user.password)) {
      throw new UnauthorizedException();
    }

    return {
      id: _user.id,
      email: _user.email,
      username: _user.username,
    };
  }
}
