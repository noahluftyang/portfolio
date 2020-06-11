import { HideField, ObjectType } from '@nestjs/graphql';

import { Model } from './base.model';
import { SocialAccount } from './social-account.model';

@ObjectType()
export class User extends Model {
  email: string;
  username?: string;
  socialAccounts: SocialAccount[];

  @HideField()
  password: string;
}
