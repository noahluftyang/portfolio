import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const loginMutation = gql`
  mutation Login($data: LoginUserDto!) {
    login(data: $data) {
      accessToken
    }
  }
`;

@Injectable()
export class AccountsService {
  constructor(private apollo: Apollo) {}

  login({ email, password }) {
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: { data: { email, password } }
    });
  }
}
