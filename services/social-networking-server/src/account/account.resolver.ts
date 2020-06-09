import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Auth } from '../models/mod';
import { UserEntity } from '../user/user.decorator';
import { AccountService } from './account.service';
import { LoginUserDto, RegisterUserDto } from './dto/mod';
import { LocalAuthGuard } from './guards/mod';

@Resolver(of => Auth)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(returns => Auth)
  login(@Args('data') data: LoginUserDto) {
    return this.accountService.login(data);
  }

  @Mutation(returns => Auth)
  register(@Args('data') data: RegisterUserDto) {
    return this.accountService.register(data);
  }
}
