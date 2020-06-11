import { Module } from '@nestjs/common';

import { MediaService } from '../media/media.service';
import { SharedModule } from '../shared/mod';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

@Module({
  imports: [SharedModule],
  providers: [CommentResolver, CommentService, MediaService],
})
export class CommentModule {}
