import { Module } from '@nestjs/common';

import { FirebaseService, PrismaService } from './services/mod';

@Module({
  exports: [FirebaseService, PrismaService],
  providers: [FirebaseService, PrismaService],
})
export class SharedModule {}
