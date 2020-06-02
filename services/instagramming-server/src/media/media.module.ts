import { Module } from '@nestjs/common';

import { JwtStrategy } from '../shared/guards/mod';
import { PrismaService } from '../shared/services/mod';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

@Module({
  controllers: [MediaController],
  providers: [JwtStrategy, MediaService, PrismaService],
})
export class MediaModule {}
