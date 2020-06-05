import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { User } from './user.model';

@ObjectType()
export class Auth {
  @Field(type => ID)
  id: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
