const { PrismaClient } = require('@prisma/client');
const { ApolloServer } = require('apollo-server-koa');

const { app } = require('./app');
const { schema } = require('./schema');
const { AuthService } = require('./services/mod');

const prisma = new PrismaClient();

const server = new ApolloServer({
  context: ({ req }) => ({ req }),
  dataSources: () => ({ authService: new AuthService({ store: prisma }) }),
  schema,
});

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log(`🚀  Server ready at http://localhost:8000`);
});
