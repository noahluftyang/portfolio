import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Args, GqlExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';

import { JwtAuthGuard } from '../guards/mod';
import { ResponseBody } from '../models/mod';
import { ConnectSocialDto } from './connect-social.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const _context = GqlExecutionContext.create(context);

  return _context.getContext().req.user;
});

@Resolver(of => User)
@UseGuards(JwtAuthGuard)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User)
  me(@CurrentUser() user): User {
    return user;
  }

  @Mutation(returns => User)
  updateUser(@Args('data') data: UpdateUserDto, @CurrentUser() user: User) {
    return this.userService.update(user.id, data);
  }

  @Mutation(returns => ResponseBody)
  connectSocial(@Args('data') data: ConnectSocialDto, @CurrentUser() user: User) {
    return this.userService.connectSocial(user.id, data);
  }
}
