import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AccountService } from "../core/services/mod";

@Component({
  selector: "app-signup-page",
  styleUrls: ["signup.component.scss"],
  templateUrl: "signup.component.html",
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.signupForm = this.formBuilder.group({
      email: "",
      username: "",
      password: "",
    });
  }

  signup() {
    this.accountService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl("/");
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
