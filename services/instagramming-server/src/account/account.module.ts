import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaService, UserService } from '../shared/services/mod';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AccountController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AccountService, LocalStrategy, PrismaService, UserService],
})
export class AccountModule {}
