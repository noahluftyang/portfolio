import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  app.use(helmet());
  app.enableCors();

  await app.listen(PORT);
}

bootstrap();
