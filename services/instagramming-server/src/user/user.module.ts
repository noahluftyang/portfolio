import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { JwtStrategy } from '../shared/guards/mod';
import { AuthMiddleware } from '../shared/middlewares/mod';
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
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('accounts');
  }
}
