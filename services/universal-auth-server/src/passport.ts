import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GithubStrategy } from 'passport-github';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as TwitterStrategy } from 'passport-twitter';

import { config } from './config';
import { prisma } from './prisma';

passport.serializeUser((user: User, done) => {
  const accessToken = sign(user, 'secret');

  return done(null, accessToken);
});

passport.deserializeUser(async (id: number, done) => {
  const user = await prisma.user.findOne({ where: { id } });

  if (!user) {
    return done('error');
  }

  return done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: config.GOOGLE.CALLBACK_URL,
      clientID: config.GOOGLE.CLIENT_ID,
      clientSecret: config.GOOGLE.CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      let _user: User;

      try {
        _user = await prisma.socialAccount.findOne({ where: { id: profile.id } }).user();
      } catch (error) {
        return done(error);
      }

      if (!_user) {
        const { id, email, username, ...newUser } = await prisma.user.create({
          data: {
            email: profile._json.email,
            socialAccounts: {
              create: {
                id: profile.id,
                provider: 'GOOGLE',
              },
            },
          },
        });

        return done(null, { id, email, username });
      }

      return done(null, { id: _user.id, email: _user.email, username: _user.username });
    }
  )
);

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    let _user: User;

    try {
      _user = await prisma.user.findOne({ where: { email } });
    } catch (error) {
      return done(error);
    }

    if (!_user) {
      return done({ status: 'INVALID_ACCOUNT' });
    }

    if (!compare(password, _user.password)) {
      return done({ status: 'INVALID_ACCOUNT' });
    }

    return done(null, { id: _user.id, email: _user.email, username: _user.username });
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    },
    async (payload, done) => {
      let _user: User;

      try {
        _user = await prisma.user.findOne({ where: { id: payload.id } });
      } catch (error) {
        return done(error);
      }

      return done(null, { id: _user.id, email: _user.email, username: _user.username });
    }
  )
);
// passport.use(new TwitterStrategy({}, (accessToken, refreshToken, profile, done) => {}));
