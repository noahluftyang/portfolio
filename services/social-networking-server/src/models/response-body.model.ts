import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseBody {
  @Field()
  status: string;
}
