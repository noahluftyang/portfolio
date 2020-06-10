const { makeSchema } = require('@nexus/schema');
const { nexusPrismaPlugin } = require('nexus-prisma');
const { resolve } = require('path');

const { Mutation } = require('./mutation');
const { Query } = require('./query');

const schema = makeSchema({
  outputs: {
    schema: resolve(process.cwd(), 'src/schema.graphql'),
  },
  plugins: [nexusPrismaPlugin()],
  types: [Mutation, Query],
});

exports.schema = schema;
