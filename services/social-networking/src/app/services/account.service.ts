import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';

const connectSocialMutation = gql`
  mutation ConnectSocial($data: ConnectSocialDto!) {
    connectSocial(data: $data) {
      status
    }
  }
`;

@Injectable()
export class AccountService {
  isAuthenticated = false;
  currentUser: Observable<any>;

  constructor(
    private apollo: Apollo,
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  async socialLogin(provider): Promise<void> {
    try {
      // await this.firebaseAuth.signInWithPopup(provider);

      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }

  facebookLogin(): void {
    // this.socialLogin(new auth.FacebookAuthProvider());
  }

  googleLogin(): void {
    // this.socialLogin(new auth.GoogleAuthProvider());
  }

  login({ email, password }): void {
    this.http.post('http://localhost:8001/login', { email, password }).subscribe(
      ({ accessToken }) => {
        this.storageService.set('accessToken', accessToken);
        this.isAuthenticated = true;
        this.router.navigateByUrl('/');
      },
      error => {
        console.error(error);
      }
    );
  }

  signup({ email, password, username }): void {
    this.http.post('http://localhost:8001/signup', { email, password, username }).subscribe(
      ({ accessToken }) => {
        this.storageService.set('accessToken', accessToken);
        this.router.navigateByUrl('/');
      },
      error => {
        console.error(error);
      }
    );
  }

  async signout(): Promise<void> {
    try {
      this.storageService.remove('accessToken');
      this.isAuthenticated = false;
      this.router.navigateByUrl('/accounts/login');
    } catch (error) {
      console.error(error);
    }
  }

  verify() {
    const accessToken = this.storageService.get('accessToken');

    this.http
      .post('http://localhost:8001/verify', null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .subscribe(
        data => {
          this.isAuthenticated = true;
        },
        error => {
          console.error(error);
          this.isAuthenticated = false;
        }
      );
  }
}
