import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Args, GqlExecutionContext, Mutation, Resolver } from '@nestjs/graphql';

import { LocalAuthGuard } from '../guards/mod';
import { AccountService } from './account.service';
import { Auth } from './auth.model';
import { LoginUserDto } from './login-user.dto';
import { RegisterUserDto } from './register-user.dto';
import { Token } from './token.model';

const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const _context = GqlExecutionContext.create(context);

  return _context.getContext().user;
});

@Resolver(of => Auth)
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Mutation(returns => Auth)
  @UseGuards(LocalAuthGuard)
  login(@Args('data') data: LoginUserDto, @CurrentUser() user): any {
    return this.accountService.generateToken(user);
  }

  @Mutation(returns => Auth)
  register(@Args('data') data: RegisterUserDto): Promise<any> {
    return this.accountService.register(data);
  }

  @Mutation(returns => Token)
  refreshToken(@Args('token') token: string): any {
    return this.accountService.refreshToken(token);
  }
}
