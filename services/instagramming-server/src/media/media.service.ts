import { Injectable } from '@nestjs/common';

import { PrismaService } from '../shared/services/mod';

@Injectable()
export class MediaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    const media = await this.prisma.media.create({ data });

    return media;
  }

  async findAll(): Promise<any[]> {
    const media = await this.prisma.media.findMany();

    return media;
  }

  async findById(id: number): Promise<any> {
    const media = await this.prisma.media.findOne({ where: { id } });

    return media;
  }
}
