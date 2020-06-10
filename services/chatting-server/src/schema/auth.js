const { objectType } = require('@nexus/schema');

const Auth = objectType({
  name: 'Auth',
  definition(t) {
    t.string('accessToken');
    t.string('refreshToken');
  },
});

exports.Auth = Auth;
