import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Args, GqlExecutionContext, Mutation, Resolver } from '@nestjs/graphql';

import { Auth, Token } from '../shared/models/mod';
import { AccountService } from './account.service';
import { LoginUserDto, RegisterUserDto } from './dto/mod';
import { LocalAuthGuard } from './guards/mod';

const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const _context = GqlExecutionContext.create(context);

  return _context.getContext().user;
});

@Resolver(of => Auth)
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Mutation(returns => Auth)
  @UseGuards(LocalAuthGuard)
  login(@Args('data') data: LoginUserDto, @CurrentUser() user) {
    return this.accountService.generateToken(user);
  }

  @Mutation(returns => Auth)
  register(@Args('data') data: RegisterUserDto) {
    return this.accountService.register(data);
  }

  @Mutation(returns => Token)
  refreshToken(@Args('token') token: string) {
    return this.accountService.refreshToken(token);
  }
}
