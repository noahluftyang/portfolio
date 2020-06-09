import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';

import { UserService } from '../user/mod';
import { RegisterUserDto } from './dto/mod';

@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  generateToken(payload) {
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '6000s',
    });

    return { accessToken, refreshToken };
  }

  async login(payload): Promise<any> {
    const { email, password } = payload;

    const _user = await this.userService.findByEmail(email);

    if (!_user) {
      throw new UnauthorizedException();
    }

    if (!compare(password, _user.password)) {
      throw new UnauthorizedException();
    }

    return this.generateToken({
      id: _user.id,
      email: _user.email,
      username: _user.username,
    });
  }

  async register(payload: RegisterUserDto): Promise<any> {
    const { email, password, username } = payload;
    const encryptedPassword = await hash(password, 10);

    const data = {
      email,
      password: encryptedPassword,
      username,
    };

    try {
      const user = await this.userService.create(data);

      return { user };
    } catch (error) {
      throw new ConflictException();
    }
  }
}
