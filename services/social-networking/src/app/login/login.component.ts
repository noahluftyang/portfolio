import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../core/services/mod';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.scss'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
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

  login() {
    this.accountService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/');
      },
      error => {
        console.error(error);
      }
    );
  }
}
