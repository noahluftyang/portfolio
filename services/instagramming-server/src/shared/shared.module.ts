import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './services/mod';
import { JwtStrategy } from './strategies/mod';

@Global()
@Module({
  exports: [PrismaService],
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [JwtStrategy, PrismaService],
})
export class SharedModule {}
