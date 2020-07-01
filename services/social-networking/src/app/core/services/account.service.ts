import 'firebase/auth';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Apollo } from 'apollo-angular';
import { auth } from 'firebase/app';
import gql from 'graphql-tag';

const connectSocialMutation = gql`
  mutation ConnectSocial($data: ConnectSocialDto!) {
    connectSocial(data: $data) {
      status
    }
  }
`;

@Injectable()
export class AccountService {
  constructor(
    private apollo: Apollo,
    private firebaseAuth: AngularFireAuth,
    private http: HttpClient
  ) {}

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();

    return this.firebaseAuth.signInWithPopup(provider);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();

    return this.firebaseAuth.signInWithPopup(provider);
  }

  async connectGoogle() {
    const provider = new auth.GoogleAuthProvider();

    const { user } = await this.firebaseAuth.signInWithPopup(provider);

    return this.apollo.mutate({
      mutation: connectSocialMutation,
      variables: { data: { id: user.uid, provider: 'GOOGLE' } },
    });
  }

  login({ email, password }) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  issueToken(uid: string) {
    return this.http.post('http://localhost:8000/token', { uid });
  }

  signup({ email, password, username }) {
    return this.http.post('http://localhost:8001/signup', { email, password });
  }

  signout() {
    return this.firebaseAuth.signOut();
  }
}
