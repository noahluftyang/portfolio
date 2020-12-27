import { authClient } from './client';

interface SigninRequestParams {
  readonly email: string;
  readonly password: string;
}

interface SigninResponseBody {
  token: string;
}

export async function signin(params: SigninRequestParams) {
  return authClient.post<SigninResponseBody>('/signin', params);
}
