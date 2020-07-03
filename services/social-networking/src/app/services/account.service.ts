import 'firebase/auth';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { auth } from 'firebase/app';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const connectSocialMutation = gql`
  mutation ConnectSocial($data: ConnectSocialDto!) {
    connectSocial(data: $data) {
      status
    }
  }
`;

@Injectable()
export class AccountService {
  currentUser: Observable<any>;

  constructor(
    private apollo: Apollo,
    private firebaseAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUser = firebaseAuth.authState.pipe(
      map(user => {
        if (user) {
          return user;
        }

        return null;
      })
    );
  }

  async socialLogin(provider): Promise<void> {
    try {
      await this.firebaseAuth.signInWithPopup(provider);

      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }

  facebookLogin(): void {
    this.socialLogin(new auth.FacebookAuthProvider());
  }

  googleLogin(): void {
    this.socialLogin(new auth.GoogleAuthProvider());
  }

  async connectGoogle() {
    const provider = new auth.GoogleAuthProvider();

    const { user } = await this.firebaseAuth.signInWithPopup(provider);

    return this.apollo.mutate({
      mutation: connectSocialMutation,
      variables: { data: { id: user.uid, provider: 'GOOGLE' } },
    });
  }

  async login({ email, password }): Promise<void> {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);

      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }

  issueToken(uid: string) {
    return this.http.post('http://localhost:8000/token', { uid });
  }

  signup({ email, password, username }) {
    return this.http.post('http://localhost:8001/signup', { email, password });
  }

  async signout(): Promise<void> {
    try {
      await this.firebaseAuth.signOut();

      this.router.navigateByUrl('/accounts/login');
    } catch (error) {
      console.error(error);
    }
  }
}
