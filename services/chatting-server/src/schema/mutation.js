const { mutationType, stringArg } = require('@nexus/schema');

const { Auth } = require('./auth');

const Mutation = mutationType({
  definition(t) {
    t.field('login', {
      args: { email: stringArg(), password: stringArg() },
      type: Auth,
      resolve(_, { email, password }, { dataSources }) {
        return dataSources.authService.login(email, password);
      },
    });
  },
});

exports.Mutation = Mutation;
