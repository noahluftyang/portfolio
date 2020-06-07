import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const mediaListQuery = gql`
  query MediaList {
    mediaList {
      id
    }
  }
`;

const userMediaQuery = gql`
  query UserMedia {
    userMedia {
      id
    }
  }
`;

@Injectable()
export class MediaService {
  constructor(private apollo: Apollo) {}

  readFeeds() {
    return this.apollo.watchQuery({ query: userMediaQuery }).valueChanges;
  }

  readMedia() {
    return this.apollo.watchQuery({ query: mediaListQuery }).valueChanges;
  }
}
