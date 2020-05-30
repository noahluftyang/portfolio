import { Injectable } from '@nestjs/common';

import { User } from '../../interfaces/user';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<any> {
    const user = await this.prisma.user.create({ data });

    return user;
  }

  async findById(id: number): Promise<any> {
    const user = await this.prisma.user.findOne({ where: { id } });

    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await this.prisma.user.findOne({ where: { email } });

    return user;
  }
}
