import { GraphQLClient, gql } from 'graphql-request';

let apiClient: GraphQLClient;

export function createAppApiClient(baseURL: string) {
  if (apiClient == null) {
    apiClient = new GraphQLClient(`${baseURL}/graphql`);
  }

  return {
    chats(token: string, roomId: number) {
      const headers = new Headers({ Authorization: token != null ? `Bearer ${token}` : null });

      return apiClient.request(
        gql`
          query getChats($roomId: ID!) {
            Chat(roomId: $roomId) {
              id
              content
            }
          }
        `,
        { roomId },
        headers
      );
    },
    rooms(token: string) {
      const headers = new Headers({ Authorization: token != null ? `Bearer ${token}` : null });

      return apiClient.request(
        gql`
          query rooms {
            rooms {
              id
            }
          }
        `,
        null,
        headers
      );
    },
  };
}
