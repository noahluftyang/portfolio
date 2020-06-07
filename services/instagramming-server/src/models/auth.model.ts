import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { User } from './user.model';

@ObjectType()
export class Auth {
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;

  user: User;
}
