import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class File {
  @Field()
  filename: string;
  mimetype: string;
  encoding: string;
}
