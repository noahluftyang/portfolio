import { Injectable } from '@nestjs/common';

import { FirebaseService, PrismaService } from '../shared/services/mod';
import { Media } from './media.model';

@Injectable()
export class MediaService {
  constructor(private firebase: FirebaseService, private prisma: PrismaService) {}

  create(data: any): Promise<any> {
    console.log(this.firebase.storage);

    return this.prisma.media.create({ data });
  }

  findAll(): Promise<Media[]> {
    console.log(this.firebase.storage.bucket);

    return this.prisma.media.findMany({ where: { deletedAt: null } });
  }

  findById(id: number): Promise<Media> {
    return this.prisma.media.findOne({ where: { id } });
  }

  findMediaComments(id: number): Promise<any> {
    return this.prisma.media.findOne({ where: { id } }).comments({ where: { deletedAt: null } });
  }
}
