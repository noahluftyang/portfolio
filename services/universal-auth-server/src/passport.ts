// import { Strategy as FacebookStrategy } from 'passport-facebook';
// import { Strategy as GithubStrategy } from 'passport-github';
// import { Strategy as KakaoStrategy } from 'passport-kakao';
// import { Strategy as TwitterStrategy } from 'passport-twitter';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import * as passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import { config } from './config';
import { prisma } from './prisma';

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
        _user = await prisma.socialAccount.findUnique({ where: { id: profile.id } }).user();
      } catch (error) {
        return done(error);
      }

      if (!_user) {
        const { id, email, username } = await prisma.user.upsert({
          create: {
            email: profile._json.email,
            service: 'SOCIAL_NETWORKING',
            socialAccounts: {
              create: {
                id: profile.id,
                provider: 'GOOGLE',
              },
            },
          },
          update: {
            socialAccounts: {
              create: {
                id: profile.id,
                provider: 'GOOGLE',
              },
            },
          },
          where: {
            email: profile._json.email,
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

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    },
    async (payload, done) => {
      let _user: User;

      try {
        _user = await prisma.user.findUnique({ where: { id: payload.id } });
      } catch (error) {
        return done({ status: 'UNAUTHORIZED' });
      }

      return done(null, { id: _user.id, email: _user.email, username: _user.username });
    }
  )
);
// passport.use(new TwitterStrategy({}, (accessToken, refreshToken, profile, done) => {}));
