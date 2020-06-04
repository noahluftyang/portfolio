import { Resolver } from '@nestjs/graphql';

import { Account } from '../models/mod';

@Resolver(() => Account)
export class AccountResolver {
  login() {}

  register() {}
}
