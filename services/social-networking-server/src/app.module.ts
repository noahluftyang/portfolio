import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LoggerModule } from 'nestjs-pino';
import { resolve } from 'path';

import { AccountModule } from './account/mod';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { CommentModule } from './comment/mod';
import { MediaModule } from './media/mod';
import { UserModule } from './user/mod';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: resolve(process.cwd(), 'src/schema.graphql'),
        context: ({ req }) => ({ req }),
        playground: configService.get('NODE_ENV') === 'production' ? false : true,
      }),
    }),
    LoggerModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: resolve(process.cwd(), 'media') }),
    AccountModule,
    CommentModule,
    MediaModule,
    UserModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
