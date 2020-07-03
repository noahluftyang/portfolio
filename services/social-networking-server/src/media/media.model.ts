import { Field, ObjectType } from '@nestjs/graphql';

import { Model } from '../models/mod';

@ObjectType()
export class Media extends Model {
  @Field()
  url: string;

  thumbnailUrl: string;

  @Field()
  likeCount: number;

  @Field()
  ownerId: string;

  isCommentEnabled: boolean;
}
