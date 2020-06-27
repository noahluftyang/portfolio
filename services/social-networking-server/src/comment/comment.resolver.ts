import { Args, Query, Resolver } from '@nestjs/graphql';

import { MediaService } from '../media/mod';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Resolver(of => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService, private mediaService: MediaService) {}

  @Query(returns => [Comment])
  mediaComments(@Args('id') id: number) {
    return this.mediaService.findMediaComments(id);
  }
}
