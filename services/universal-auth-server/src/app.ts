import './passport';

import { json } from 'body-parser';
import * as compression from 'compression';
import * as connect from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as passport from 'passport';
import * as pino from 'pino-http';

import { redis } from './redis';
import { router } from './routes';

export const app = express();

const RedisStore = connect(session);

app.use(helmet());
app.use(cors());
app.use(compression());
// app.use(pino());
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    store: new RedisStore({ client: redis }),
  })
);
app.use(json());
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
