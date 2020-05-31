import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findByAuthorId(authorId: number) {
    const posts = await this.prisma.post.findMany({ where: { authorId } });

    return posts;
  }
}
