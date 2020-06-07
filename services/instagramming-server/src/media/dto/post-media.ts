import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostMediaDto {
  @Field()
  url: string;
}
