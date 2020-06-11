import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class Model {
  @Field(type => ID)
  id: number;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
