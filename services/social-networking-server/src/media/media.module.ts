import { Module } from '@nestjs/common';

import { SharedModule } from '../shared.module';
import { UserService } from '../user/mod';
import { MediaResolver } from './media.resolver';
import { MediaService } from './media.service';

@Module({
  imports: [SharedModule],
  providers: [MediaResolver, MediaService, UserService],
})
export class MediaModule {}
