import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AuthMiddleware } from '../shared/middlewares/mod';
import {
  AccountService,
  PrismaService,
  UserService,
} from '../shared/services/mod';
import { AccountController } from './account.controller';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService, UserService],
})
export class AccountModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('accounts');
  }
}
