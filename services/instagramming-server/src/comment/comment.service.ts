import { Injectable } from '@nestjs/common';

import { PrismaService } from '../shared/services/mod';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<any> {
    const comment = await this.prisma.comment.create({ data });

    return comment;
  }

  async findAll(): Promise<any[]> {
    const comments = await this.prisma.comment.findMany();

    return comments;
  }

  async findOne(id: number): Promise<any> {
    const comment = await this.prisma.comment.findOne({ where: { id } });

    return comment;
  }

  async update(id: number, data) {
    const comment = await this.prisma.comment.upsert({
      create: data,
      update: data,
      where: { id },
    });

    return comment;
  }

  async delete(id: number) {
    const comment = await this.prisma.comment.delete({ where: { id } });

    return comment;
  }
}
