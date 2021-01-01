import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { resolve } from 'path';

import { app } from './app';
import { context } from './context';
import * as types from './schema/mod';

const server = new ApolloServer({
  context,
  schema: makeSchema({
    outputs: {
      schema: resolve(process.cwd(), 'src/schema.graphql'),
      typegen: resolve(process.cwd(), 'src/typegen.ts'),
    },
    types,
  }),
});

server.applyMiddleware({ app });

// NOTE: read PORT from config
app.listen({ port: 8001 }, () => {
  console.log(`🚀  Server ready at http://localhost:${8001}/graphql`);
});
