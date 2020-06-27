import { Injectable } from '@nestjs/common';

import { PrismaService } from '../services/mod';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  connectSocial(userId: number, data): Promise<any> {
    return this.prisma.socialAccount.create({ data: { ...data, userId } });
  }

  create(data): Promise<any> {
    return this.prisma.user.create({ data });
  }

  findAll(): Promise<any[]> {
    return this.prisma.user.findMany({ select: { id: true, email: true, username: true } });
  }

  findById(id: number): Promise<any> {
    return this.prisma.user.findOne({
      select: { id: true, email: true, username: true },
      where: { id },
    });
  }

  findByEmail(email: string): Promise<any> {
    return this.prisma.user.findOne({ where: { email } });
  }

  findBySocialId(socialId: string): Promise<any> {
    return this.prisma.socialAccount.findOne({ where: { id: socialId } }).user();
  }

  update(id: number, data) {
    return this.prisma.user.upsert({
      create: data,
      update: data,
      where: { id },
    });
  }

  findUserMediaList(id: number) {
    return this.prisma.user.findOne({ where: { id } }).media({ where: { deletedAt: null } });
  }
}
