import { SigninRequestParams } from './Signin';

export interface SignupRequestParams extends SigninRequestParams {
  username: string;
}

export interface SignupResponseBody {
  status: string;
}
