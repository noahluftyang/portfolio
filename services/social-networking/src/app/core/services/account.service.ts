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

const signupMutation = gql`
  mutation Register($data: RegisterUser) {
    register(data: $data) {
      accessToken
    }
  }
`;

const connectSocialMutation = gql`
  mutation ConnectSocial($data) {

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

  async connectGoogleAccount() {
    const provider = new auth.GoogleAuthProvider();

    const { user } = await this.firebaseAuth.signInWithPopup(provider);

    this.apollo.mutate({
      mutation: connectSocialMutation,
      variables: { data: { id: user.uid, provider: 'GOOGLE' } },
    });
  }

  login({ email, password }) {
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: { data: { email, password } },
    });
  }

  signup({ email, password, username }) {
    return this.apollo.mutate({
      mutation: signupMutation,
      variables: { data: { email, password, username } },
    });
  }
}
