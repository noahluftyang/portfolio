// import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './account/mod';
import { AppController } from './app.controller';
import { UserModule } from './user/mod';

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot(), AccountModule, UserModule],
  providers: [],
})
export class AppModule {}
