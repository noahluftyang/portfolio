import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaService } from '../shared/services/mod';
import { UserService } from '../user/mod';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';
import { LocalStrategy } from './strategies/mod';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET', 'secret'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [AccountService, AccountResolver, LocalStrategy, PrismaService, UserService],
})
export class AccountModule {}
