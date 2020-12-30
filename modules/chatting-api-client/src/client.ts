import { GraphQLClient, gql } from 'graphql-request';

let apiClient: GraphQLClient;

export function createAppApiClient(baseURL: string) {
  if (apiClient == null) {
    apiClient = new GraphQLClient(baseURL, { credentials: 'include' });
  }

  return {
    user() {
      return apiClient.request(gql`
        User() {}
      `);
    },
  };
}
