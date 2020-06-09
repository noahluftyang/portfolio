import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Media {
  @Field(type => ID)
  id: number;
  @Field()
  url: string;
  @Field()
  thumbnailUrl: string;
  @Field()
  ownerId: number;
}
