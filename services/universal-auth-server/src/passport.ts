import { compare } from 'bcrypt';
import * as passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GithubStrategy } from 'passport-github';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as TwitterStrategy } from 'passport-twitter';

import { config } from './config';
import { prisma } from './prisma';

passport.serializeUser((user: any, done) => done(null, user.id));

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
      const currentUser = await prisma.socialAccount.findOne({ where: { id: profile.id } }).user();

      if (!currentUser) {
        const newUser = await prisma.user.create({
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

        return done(null, newUser);
      }

      return done(null, currentUser);
    }
  )
);
passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    let _user;

    try {
      _user = await prisma.user.findOne({ where: { email } });
    } catch (error) {
      return done(error);
    }

    if (!_user) {
      return done({ message: 'Incorrect username' });
    }

    if (!compare(password, _user.password)) {
      return done({ status: 'INCORRECT_PASSWORD' });
    }

    return done(null, { id: _user.id, email: _user.email, username: _user.username });
  })
);
// passport.use(new TwitterStrategy({}, (accessToken, refreshToken, profile, done) => {}));
