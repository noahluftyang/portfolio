import { Module } from '@nestjs/common';

import { AccountModule } from './account/mod';
import { AppController } from './app.controller';
import { CommentModule } from './comment/mod';
import { MediaModule } from './media/mod';
import { SharedModule } from './shared/mod';
import { UserModule } from './user/mod';

@Module({
  controllers: [AppController],
  imports: [
    AccountModule,
    CommentModule,
    MediaModule,
    SharedModule,
    UserModule,
  ],
})
export class AppModule {}
