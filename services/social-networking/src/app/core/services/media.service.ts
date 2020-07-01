import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const mediaListQuery = gql`
  query MediaList {
    media
  }
`;

const userFeedsQuery = gql`
  query UserFeeds {
    user
  }
`;

const userUploadsQuery = gql`
  query UserUploads {
    user {
      id
    }
  }
`;

@Injectable()
export class MediaService {
  constructor(private apollo: Apollo) {}

  mediaList() {
    return this.apollo.watchQuery({ query: mediaListQuery }).valueChanges;
  }

  feeds() {
    return this.apollo.watchQuery({ query: userFeedsQuery }).valueChanges;
  }

  uploads() {
    return this.apollo.watchQuery({ query: userUploadsQuery }).valueChanges;
  }
}
