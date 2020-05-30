import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { LoginUserDto, RegisterUserDto } from '../../dto/mod';
import { UserService } from './user.service';

@Injectable()
export class AccountService {
  constructor(private readonly userService: UserService) {}

  async login(payload: LoginUserDto): Promise<any> {
    const _user = await this.userService.findByEmail(payload.email);

    if (!_user) {
      throw new UnauthorizedException();
    }

    if (!compare(payload.password, _user.password)) {
      throw new UnauthorizedException();
    }

    const token = sign({});
    const { password, ...user } = _user;

    return { token, ...user };
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

  async validateUser(payload: any): Promise<any> {
    //   return this.usersService.findOne(payload.id);
  }
}
