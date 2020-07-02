import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from 'nestjs-pino';
import { resolve } from 'path';

import { AppResolver } from './app.resolver';
import { AuthMiddleware } from './auth.middleware';
import { CommentModule } from './comment/mod';
import { MediaModule } from './media/mod';

@Module({
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
    CommentModule,
    MediaModule,
  ],
  providers: [AppResolver],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes('/graphql');
  }
}
