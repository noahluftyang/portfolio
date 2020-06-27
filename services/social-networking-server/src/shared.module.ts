import { Module } from '@nestjs/common';

import { FirebaseService, PrismaService } from './services/mod';
import { JwtStrategy } from './strategies/mod';

@Module({
  exports: [FirebaseService, PrismaService],
  providers: [FirebaseService, JwtStrategy, PrismaService],
})
export class SharedModule {}
