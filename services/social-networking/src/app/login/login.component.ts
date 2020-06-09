import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountsService } from '../core/services/mod';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private accountsService: AccountsService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.accountsService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/');
      },
      error => {
        console.error(error);
      }
    );
  }

  googleLogin() {}
}
