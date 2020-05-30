import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AuthMiddleware } from '../shared/middlewares/mod';
import { PrismaService, UserService } from '../shared/services/mod';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('accounts');
  }
}
