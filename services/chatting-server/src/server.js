const { PrismaClient } = require('@prisma/client');
const { ApolloServer } = require('apollo-server-express');

const { app } = require('./app');
const { schema } = require('./schema/bootstrap');
const { AuthService } = require('./services/auth');

const prisma = new PrismaClient();

const server = new ApolloServer({
  dataSources: () => ({ authService: new AuthService({ store: prisma }) }),
  schema,
});

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log(`🚀  Server ready at http://localhost:8000`);
});
