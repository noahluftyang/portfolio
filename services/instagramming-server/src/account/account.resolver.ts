import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Auth } from '../models/mod';
import { AccountService } from './account.service';
import { LoginUserDto, RegisterUserDto } from './dto/mod';
import { LocalAuthGuard } from './guards/mod';
import { UserEntity } from 'src/user/user.decorator';

@Resolver(of => Auth)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(returns => Auth)
  @UseGuards(LocalAuthGuard)
  login(@Args('data') data: LoginUserDto, @UserEntity() user) {
    console.log(user, data);
    return this.accountService.login(data);
  }

  @Mutation(returns => Auth)
  register(@Args('data') data: RegisterUserDto) {
    console.log(data);
    return this.accountService.register(data);
  }
}
