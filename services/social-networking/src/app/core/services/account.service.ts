import 'firebase/auth';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Apollo } from 'apollo-angular';
import { auth } from 'firebase/app';
import gql from 'graphql-tag';

const loginMutation = gql`
  mutation Login($data: LoginUserDto!) {
    login(data: $data) {
      accessToken
    }
  }
`;

@Injectable()
export class AccountService {
  constructor(private apollo: Apollo, private firebaseAuth: AngularFireAuth) {}

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();

    return this.firebaseAuth.signInWithPopup(provider);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();

    return this.firebaseAuth.signInWithPopup(provider);
  }

  login({ email, password }) {
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: { data: { email, password } },
    });
  }
}
