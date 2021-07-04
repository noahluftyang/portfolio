import { gql, GraphQLClient } from 'graphql-request';

let chattingApi: GraphQLClient;

export function createAppApiClient(baseURL: string) {
  if (chattingApi == null) {
    chattingApi = new GraphQLClient(`${baseURL}/graphql`);
  }

  return {
    chats(roomId: number) {
      return chattingApi.request(
        gql`
          query getChats($roomId: ID!) {
            Chat(roomId: $roomId) {
              id
              content
            }
          }
        `,
        { roomId }
      );
    },
    rooms() {
      return chattingApi.request(
        gql`
          query rooms {
            rooms {
              id
            }
          }
        `,
        null
      );
    },
  };
}
