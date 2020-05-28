import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({
      username: '',
    });
  }

  ngOnInit() {}
}
