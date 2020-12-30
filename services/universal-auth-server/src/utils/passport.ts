import { authenticate as passportAuthenticate } from 'passport';
// import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
// import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

export function authenticate(strategy) {
  return (req, res) => {
    return new Promise((resolve, reject) => {
      passportAuthenticate(strategy, (error, user) => {
        console.log(error, user);

        if (error != null) {
          reject(error);
        }

        resolve(user);
      })(req, res);
    });
  };
}

// import { config } from './config';

// passport.use(
//   new GoogleStrategy(
//     {
//       callbackURL: config.GOOGLE.CALLBACK_URL,
//       clientID: config.GOOGLE.CLIENT_ID,
//       clientSecret: config.GOOGLE.CLIENT_SECRET,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       let _user: User;

//       try {
//         _user = await prisma.socialAccount.findUnique({ where: { id: profile.id } }).user();
//       } catch (error) {
//         return done(error);
//       }

//       if (!_user) {
//         const { id, email, username } = await prisma.user.upsert({
//           create: {
//             email: profile._json.email,
//             service: 'SOCIAL_NETWORKING',
//             socialAccounts: {
//               create: {
//                 id: profile.id,
//                 provider: 'GOOGLE',
//               },
//             },
//           },
//           update: {
//             socialAccounts: {
//               create: {
//                 id: profile.id,
//                 provider: 'GOOGLE',
//               },
//             },
//           },
//           where: {
//             email: profile._json.email,
//           },
//         });

//         return done(null, { id, email, username });
//       }

//       return done(null, { id: _user.id, email: _user.email, username: _user.username });
//     }
//   )
// );

// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'secret',
//     },
//     async (payload, done) => {
//       let _user: User;

//       try {
//         _user = await prisma.user.findUnique({ where: { id: payload.id } });
//       } catch (error) {
//         return done({ status: 'UNAUTHORIZED' });
//       }

//       return done(null, { id: _user.id, email: _user.email, username: _user.username });
//     }
//   )
// );
