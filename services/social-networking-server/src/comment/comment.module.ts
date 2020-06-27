import { Module } from '@nestjs/common';

import { MediaService } from '../media/mod';
import { SharedModule } from '../shared.module';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

@Module({
  imports: [SharedModule],
  providers: [CommentResolver, CommentService, MediaService],
})
export class CommentModule {}
