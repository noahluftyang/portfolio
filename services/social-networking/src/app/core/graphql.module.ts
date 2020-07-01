import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

const uri = 'http://localhost:8000/graphql';

function createApollo(httpLink: HttpLink) {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  const auth = setContext((operation, context) => ({
    headers: { Authorization: `Bearer ${token}` },
  }));
  const link = ApolloLink.from([auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return { cache, link };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      deps: [HttpLink],
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
    },
  ],
})
export class GraphQLModule {}
