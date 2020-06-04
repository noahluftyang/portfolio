import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/mod';

import { PrismaService } from '../shared/services/mod';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<User> {
    const user = await this.prisma.user.create({ data });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true, username: true },
    });

    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.prisma.user.findOne({
      select: { id: true, email: true, username: true },
      where: { id },
    });

    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await this.prisma.user.findOne({ where: { email } });

    return user;
  }

  async findBySocialId(socialId: string): Promise<User> {
    const user = await this.prisma.socialAccount
      .findOne({ where: { id: socialId } })
      .user();

    return user;
  }

  async update(id: number, data) {
    return this.prisma.user.upsert({
      create: data,
      update: data,
      where: { id },
    });
  }
}
