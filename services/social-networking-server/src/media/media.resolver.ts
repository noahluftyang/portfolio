import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Args, GqlExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

import { JwtAuthGuard } from '../guards/mod';
import { UserService } from '../user/mod';
import { Media } from './media.model';
import { MediaService } from './media.service';
import { PostMediaDto } from './post-media.dto';

const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const _context = GqlExecutionContext.create(context);

  return _context.getContext().req.user;
});

@Resolver(of => Media)
// @UseGuards(JwtAuthGuard)
export class MediaResolver {
  constructor(private mediaService: MediaService, private userService: UserService) {}

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
  mediaList() {
    return this.mediaService.findAll();
  }

  @Query(returns => [Media])
  myMediaList(@CurrentUser() user) {
    return this.userService.findUserMediaList(user.id);
  }
}
