import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'Hello World!' });
  },
});
