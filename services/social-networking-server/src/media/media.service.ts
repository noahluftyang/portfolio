import { Injectable } from '@nestjs/common';

import { PrismaService } from '../shared/services/mod';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    const media = await this.prisma.media.create({ data });

    return media;
  }

  findAll(): Promise<any[]> {
    return this.prisma.media.findMany();
  }

  async findById(id: number): Promise<any> {
    const media = await this.prisma.media.findOne({ where: { id } });

    return media;
  }

  findByUserId(userId: number) {
    return this.prisma.user.findOne({ where: { id: userId } }).media();
  }
}
