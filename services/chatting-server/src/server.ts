import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { resolve } from 'path';

import { app } from './app';
import * as types from './schema/mod';
import { authApi } from './utils/authApi';
import { prisma } from './utils/prisma';

const server = new ApolloServer({
  async context({ req }) {
    try {
      const { data } = await authApi.get('/user', {
        headers: req.headers,
      });

      return { prisma, user: data.user };
    } catch (error) {
      throw new AuthenticationError('로그인 해주세요.');
    }
  },
  schema: makeSchema({
    contextType: {
      export: 'Context',
      module: resolve(process.cwd(), 'src/context.ts'),
    },
    outputs: {
      schema: resolve(process.cwd(), 'src/schema.graphql'),
      typegen: resolve(process.cwd(), 'node_modules/@types/nexus-typegen/index.d.ts'),
    },
    sourceTypes: {
      modules: [{ alias: 'PrismaClient', module: require.resolve('.prisma/client/index.d.ts') }],
    },
    types,
  }),
});

server.applyMiddleware({ app });

// NOTE: read PORT from config
app.listen({ port: 8001 }, () => {
  console.log(`🚀  Server ready at http://localhost:${8001}/graphql`);
});
