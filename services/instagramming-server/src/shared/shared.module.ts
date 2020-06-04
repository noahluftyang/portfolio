import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaService } from './services/mod';
import { JwtStrategy } from './strategies/mod';

@Global()
@Module({
  exports: [PrismaService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.graphql',
      playground: true,
    }),
  ],
  providers: [JwtStrategy, PrismaService],
})
export class SharedModule {}
