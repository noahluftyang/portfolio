import { Field, ObjectType } from '@nestjs/graphql';

import { Model } from '../shared/models/mod';

@ObjectType()
export class Media extends Model {
  @Field()
  url: string;

  thumbnailUrl: string;
  likeCount: number;
  isCommentEnabled: boolean;
}
