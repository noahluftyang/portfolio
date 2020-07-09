import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';

type ResponseBody = { accessToken: string; status: 'SUCCESS' } | { status: 'SUCCESS'; user: any };

const AUTH_API_URL = environment.authApiURL;

@Injectable()
export class AccountService {
  currentUser: any;
  isAuthenticated: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {
    this.isAuthenticated = Boolean(storageService.get('accessToken'));
  }

  login({ email, password }): void {
    this.http
      .post<ResponseBody>('http://localhost:8001/login', { email, password })
      .subscribe(
        ({ accessToken, status }) => {
          if (status === 'SUCCESS') {
            this.storageService.set('accessToken', accessToken);
            this.isAuthenticated = true;
            this.router.navigateByUrl('/');
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  signup({ email, password, username }): void {
    this.http
      .post<ResponseBody>('http://localhost:8001/signup', { email, password, username })
      .subscribe(
        ({ accessToken, status }) => {
          if (status === 'SUCCESS') {
            this.storageService.set('accessToken', accessToken);
            this.isAuthenticated = true;
            this.router.navigateByUrl('/');
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  signout(): void {
    const accessToken = this.storageService.get('accessToken');

    this.http
      .post<ResponseBody>(`${AUTH_API_URL}/signout`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .subscribe(
        ({ status }) => {
          if (status === 'SUCCESS') {
            this.storageService.remove('accessToken');
            this.isAuthenticated = false;
            this.router.navigateByUrl('/accounts/login');
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  verify(): void {
    const accessToken = this.storageService.get('accessToken');

    this.http
      .post<ResponseBody>('http://localhost:8001/verify', null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .subscribe(
        ({ status, user }) => {
          if (status === 'SUCCESS') {
            this.currentUser = user;
            this.isAuthenticated = true;
          }
        },
        error => {
          console.error(error);
          this.isAuthenticated = false;
        }
      );
  }

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
}
