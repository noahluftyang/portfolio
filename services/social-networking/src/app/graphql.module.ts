import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import { environment } from '../environments/environment';
import { StorageService } from './services/mod';

const API_URL = `${environment.apiURL}/graphql`;

function createApollo(httpLink: HttpLink, storageService: StorageService) {
  // Get the authentication token from local storage if it exists
  const accessToken = storageService.get('accessToken');
  const auth = setContext((operation, context) => ({
    headers: { Authorization: `Bearer ${accessToken}` },
  }));
  const link = ApolloLink.from([auth, httpLink.create({ uri: API_URL })]);
  const cache = new InMemoryCache();

  return { cache, link };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      deps: [HttpLink, StorageService],
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
    },
  ],
})
export class GraphQLModule {}
