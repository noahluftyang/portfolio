import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
