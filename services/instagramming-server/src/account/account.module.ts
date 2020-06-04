import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserService } from '../user/mod';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import {
  FacebookStrategy,
  GoogleStrategy,
  LocalStrategy,
} from './strategies/mod';
import { AccountResolver } from './account.resolver';

@Module({
  controllers: [AccountController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [
    AccountService,
    FacebookStrategy,
    GoogleStrategy,
    LocalStrategy,
    UserService,
    AccountResolver,
  ],
})
export class AccountModule {}
