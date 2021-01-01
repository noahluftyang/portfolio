export interface SigninFormFields {
  email: string;
  password: string;
}

export interface SignupFormFields extends SigninFormFields {
  username: string;
}
