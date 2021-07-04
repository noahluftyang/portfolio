import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { json } from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { serve, setup } from 'swagger-ui-express';

import { signinRouter, signupRouter, userRouter } from './routes/mod';
import { docs } from './utils/docs';
import { prisma } from './utils/prisma';

// NOTE: passport
passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    let _user: User;

    try {
      _user = await prisma.user.findUnique({ where: { email } });
    } catch (error) {
      return done(error);
    }

    if (!_user) {
      return done(null, false);
    }

    const passwordMatch = await compare(password, _user.password);

    if (!passwordMatch) {
      return done(null, false);
    }

    return done(null, { id: _user.id, email: _user.email, username: _user.username });
  })
);

export const app = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: true }));
app.use(compression());
app.use(json());
app.use(signinRouter);
app.use(signupRouter);
app.use(userRouter);
app.use('/docs', serve, setup(docs));
