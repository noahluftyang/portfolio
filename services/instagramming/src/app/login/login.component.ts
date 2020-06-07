import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private accountsService: AccountsService,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    console.log('enter!', this.loginForm.value);

    this.accountsService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  googleLogin() {
    this.accountsService.googleLogin().subscribe();
  }
}
