import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';

import { UserService } from '../user/mod';
import { RegisterUserDto } from './register-user.dto';
import { Token } from './token.model';

@Injectable()
export class AccountService {
  constructor(private jwtService: JwtService, private userService: UserService) {}

  generateToken(payload): Token {
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  }

  refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);

      return this.generateToken({
        id: payload.id,
        email: payload.email,
        username: payload.username,
      });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async register({ password, ...payload }: RegisterUserDto): Promise<any> {
    const encryptedPassword = await hash(password, 10);

    try {
      const _user = await this.userService.create({ ...payload, password: encryptedPassword });

      return this.generateToken({
        id: _user.id,
        email: _user.email,
        username: _user.username,
      });
    } catch (error) {
      throw new ConflictException();
    }
  }
}
