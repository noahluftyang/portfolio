import { Injectable } from '@nestjs/common';

import { PrismaService } from '../services/mod';
import { Media } from './media.model';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  create(data: any): Promise<any> {
    return this.prisma.media.create({ data });
  }

  findAll(): Promise<Media[]> {
    return this.prisma.media.findMany({ where: { deletedAt: null } });
  }

  findAllFromUser(ownerId: string): Promise<Media[]> {
    return this.prisma.media.findMany({ where: { deletedAt: null, ownerId } });
  }

  findById(id: number): Promise<Media> {
    return this.prisma.media.findOne({ where: { id } });
  }

  findMediaComments(id: number): Promise<any> {
    return this.prisma.media.findOne({ where: { id } }).comments({ where: { deletedAt: null } });
  }
}
