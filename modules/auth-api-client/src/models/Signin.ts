export interface SigninRequestParams {
  readonly email: string;
  readonly password: string;
}

export interface SigninResponseBody {
  token: string;
}
