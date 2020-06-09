const { makeExecutableSchema } = require('graphql-tools');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    login: (_, { data }, { dataSources }) => {
      return dataSources.authService.login(data);
    },
  },
};

const typeDefs = `
  type Auth {
    accessToken: String!
    refreshToken: String!
  }

  input LoginUserDto {
    email: String!
    password: String!
  }

  type Query {
    hello: String
  }

  type Mutation {
    login(data: LoginUserDto!): Auth!
  }
`;

exports.schema = makeExecutableSchema({ resolvers, typeDefs });
