import { json } from 'body-parser';
import * as compression from 'compression';
import * as connect from 'connect-redis';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as pino from 'pino-http';
import { createClient } from 'redis';

import { router } from './routes';

export const app = express();

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const logger = pino();
const client = createClient(REDIS_URL);
const RedisStore = connect(session);

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(logger);
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    store: new RedisStore({ client }),
  })
);
app.use(json());
app.use(router);
