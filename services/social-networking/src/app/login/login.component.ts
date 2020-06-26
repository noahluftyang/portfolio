import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../core/services/mod';

@Component({
  selector: 'app-login-page',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private accountService: AccountService,
    firebaseAuth: AngularFireAuth,
    formBuilder: FormBuilder,
    router: Router
  ) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        router.navigateByUrl('/');
      }
    });

    this.loginForm = formBuilder.group({
      email: '',
      password: '',
    });
  }

  async facebookLogin() {
    const result = await this.accountService.facebookLogin();

    console.log(result);
  }

  async googleLogin() {
    const result = await this.accountService.googleLogin();

    console.log(result);
  }

  async login() {
    try {
      const response = await this.accountService.login(this.loginForm.value);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
