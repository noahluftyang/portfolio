import { Module } from '@nestjs/common';

import { SharedModule } from '../shared.module';
import { MediaResolver } from './media.resolver';
import { MediaService } from './media.service';

@Module({
  imports: [SharedModule],
  providers: [MediaResolver, MediaService],
})
export class MediaModule {}
