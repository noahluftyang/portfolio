import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountService } from '../services/mod';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
  private userSubscription: Subscription;
  loginForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    firebaseAuth: AngularFireAuth,
    formBuilder: FormBuilder
  ) {
    // this.userSubscription = firebaseAuth.authState.subscribe(this.bootstrap);
    this.loginForm = formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnDestroy(): void {
    //   this.userSubscription.unsubscribe();
  }

  bootstrap = async (user: firebase.User) => {
    if (user) {
      this.router.navigateByUrl('/');
      // const uid = user.uid;
      // accountService.issueToken(uid).subscribe(
      //   ({ accessToken }: any) => {
      //     console.log(accessToken);
      //     router.navigateByUrl('/');
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );
    }
  };

  facebookLogin(): void {
    this.accountService.facebookLogin();
  }

  googleLogin(): void {
    this.accountService.googleLogin();
  }

  login(): void {
    this.accountService.login(this.loginForm.value);
  }
}
