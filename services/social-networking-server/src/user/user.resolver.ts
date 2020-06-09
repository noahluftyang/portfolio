import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '../models/mod';
import { JwtAuthGuard } from '../shared/guards/mod';
import { UpdateUserDto } from './dto/mod';
import { UserEntity } from './user.decorator';
import { UserService } from './user.service';

@Resolver(of => User)
@UseGuards(JwtAuthGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  profile(user: User): User {
    return user;
  }

  @Mutation(returns => User)
  updateUser(@UserEntity() user: User, @Args('data') data: UpdateUserDto) {
    return this.userService.update(user.id, data);
  }
}
