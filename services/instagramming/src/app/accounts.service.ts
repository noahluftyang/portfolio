import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const loginMutation = gql`
  mutation Login($email: String!, $password: String) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

@Injectable()
export class AccountsService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  login({ email, password }) {
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: { email, password }
    });
  }

  googleLogin() {
    return this.http.get('http://localhost:8000/accounts/google');
  }
}
