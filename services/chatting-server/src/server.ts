import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { resolve } from 'path';

import { app } from './app';
import * as types from './schema/mod';
import { AuthService } from './services/auth';

const prisma = new PrismaClient();

const server = new ApolloServer({
  dataSources: () => ({ authService: new AuthService({ store: prisma }) }),
  schema: makeSchema({
    outputs: {
      schema: resolve(process.cwd(), 'src/schema.graphql'),
      typegen: resolve(process.cwd(), 'src/typegen.ts'),
    },
    plugins: [nexusPrisma()],
    types,
  }),
});

server.applyMiddleware({ app });

// NOTE: read PORT from config
app.listen({ port: 8001 }, () => {
  console.log(`🚀  Server ready at http://localhost:${8001}/graphql`);
});
