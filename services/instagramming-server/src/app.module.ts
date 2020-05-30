// import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { AccountModule } from './account/mod';
import { AppController } from './app.controller';
import { UserModule } from './user/mod';

@Module({
  controllers: [AppController],
  imports: [AccountModule, UserModule],
})
export class AppModule {}
