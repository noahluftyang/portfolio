import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { JwtStrategy } from '../shared/guards/mod';
import {
  PostService,
  PrismaService,
  UserService,
} from '../shared/services/mod';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [JwtStrategy, PostService, PrismaService, UserService],
})
export class UserModule {}
