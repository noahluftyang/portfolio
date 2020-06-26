import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../core/services/mod';

@Component({
  selector: 'app-signup-page',
  styleUrls: ['signup.component.scss'],
  templateUrl: 'signup.component.html',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private accountService: AccountService,
    firebaseAuth: AngularFireAuth,
    formBuilder: FormBuilder,
    router: Router
  ) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        router.navigateByUrl('/');
      }
    });

    this.signupForm = formBuilder.group({
      email: '',
      username: '',
      password: '',
    });
  }

  async signup() {
    try {
      const response = await this.accountService.signup(this.signupForm.value);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
