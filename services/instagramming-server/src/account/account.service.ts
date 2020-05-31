import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';

import { RegisterUserDto } from '../dto/mod';
import { UserService } from '../shared/services/mod';

@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user): Promise<any> {
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      username: user.username,
    });

    return { token };
  }

  async register(payload: RegisterUserDto): Promise<any> {
    const { email, password, username } = payload;

    const _user = await this.userService.findByEmail(email);

    if (_user) {
      throw new BadRequestException();
    }

    const encryptedPassword = await hash(password, 10);

    const data = {
      email,
      password: encryptedPassword,
      username,
    };

    const user = await this.userService.create(data);

    return { user };
  }
}
