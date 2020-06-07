import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { SocialAccount } from './social-account';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;
  email: string;
  username: string;
  socualAccounts: SocialAccount[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @HideField()
  password: string;
}
