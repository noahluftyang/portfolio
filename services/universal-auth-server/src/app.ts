import './passport';

import { ExpressOIDC } from '@okta/oidc-middleware';
import { json } from 'body-parser';
import * as compression from 'compression';
// import * as connect from 'connect-redis';
// import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as pino from 'pino-http';

// import { redis } from './redis';
import { router } from './routes';

export const app = express();

// const RedisStore = connect(session);

const oidc = new ExpressOIDC({
  client_id: '{clientId}',
  client_secret: '{clientSecret}',
  issuer: 'https://dev-931401-admin.okta.com/oauth2/default',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile',
});

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
app.use(router);
app.use(oidc.router);
