import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Args, GqlExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

import { AuthGuard } from '../auth.guard';
import { Media } from './media.model';
import { MediaService } from './media.service';
import { PostMediaDto } from './post-media.dto';

const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  return GqlExecutionContext.create(context).getContext().req.user;
});

@Resolver(of => Media)
@UseGuards(AuthGuard)
export class MediaResolver {
  constructor(private mediaService: MediaService) {}

  // TODO: file upload to cloud storage
  @Mutation(returns => Boolean)
  postMedia(
    // @Args('data') data: PostMediaDto,
    @Args({ name: 'file', type: () => GraphQLUpload }) { createReadStream, filename }: FileUpload
  ): Promise<boolean> {
    // return this.mediaService.create(data);
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./media/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', error => {
          console.log('enter!!', error);

          reject(false);
        })
    );
  }

  @Query(returns => [Media])
  feeds(@CurrentUser() user): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @Query(returns => [Media])
  uploads(@CurrentUser() user): Promise<Media[]> {
    return this.mediaService.findAllFromUser(user.uid);
  }
}
