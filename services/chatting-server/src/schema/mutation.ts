import { mutationType, stringArg } from 'nexus';

import { Auth } from './auth';

export const Mutation = mutationType({
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
