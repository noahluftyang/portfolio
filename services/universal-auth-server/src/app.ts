import './passport';

import { json } from 'body-parser';
import * as compression from 'compression';
// import * as connect from 'connect-redis';
// import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as pino from 'pino-http';
import { serve, setup } from 'swagger-ui-express';

// import { redis } from './redis';
import { signinRouter, signupRouter } from './routes/mod';
import { spec } from './spec';

export const app = express();

// const RedisStore = connect(session);

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(pino());
// app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: 'secret',
    // store: new RedisStore({ client: redis }),
  })
);
app.use(json());
app.use(signinRouter);
app.use(signupRouter);
app.use('/docs', serve, setup(spec));
