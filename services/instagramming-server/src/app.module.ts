import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './account/mod';
import { AppController } from './app.controller';
import { MediaModule } from './media/mod';
import { UserModule } from './user/mod';

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot(), AccountModule, MediaModule, UserModule],
  providers: [],
})
export class AppModule {}
