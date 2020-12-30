import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as pino from 'pino-http';

import { router } from './routes';

export const app = express();

const logger = pino();

app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
  })
);
app.use(cors());
app.use(compression());
app.use(logger);
app.use(router);
