import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';

import { app } from './app';
import { schema } from './schema/bootstrap';
import { AuthService } from './services/auth';

const prisma = new PrismaClient();

const server = new ApolloServer({
  dataSources: () => ({ authService: new AuthService({ store: prisma }) }),
  schema,
});

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log(`🚀  Server ready at http://localhost:8000`);
});
