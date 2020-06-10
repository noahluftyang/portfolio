const { queryType } = require('@nexus/schema');

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'Hello World!' });
  },
});

exports.Query = Query;
