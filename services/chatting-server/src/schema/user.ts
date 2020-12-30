import { extendType, objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('email');
    t.string('username', {
      resolve(parent) {
        return parent.username;
      },
    });
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('user', { type: 'User' });
  },
});
