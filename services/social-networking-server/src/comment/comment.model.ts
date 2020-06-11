import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field()
  text: string;

  likeCount: number;
  hidden: boolean;
}
