import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Media } from '../models/mod';
import { PostMediaDto } from './dto/mod';
import { MediaService } from './media.service';

@Resolver(of => Media)
export class MediaResolver {
  constructor(private mediaService: MediaService) {}

  @Mutation(returns => Media)
  postMedia(@Args('data') data: PostMediaDto) {
    return this.mediaService.create(data);
  }

  @Query(returns => [Media])
  mediaList() {
    return this.mediaService.findAll();
  }

  @Query(returns => [Media])
  userMedia() {
    return this.mediaService.findByUserId(1);
  }
}
