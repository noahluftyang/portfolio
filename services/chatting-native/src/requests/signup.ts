import { authClient } from './client';

interface SignupRequestParams {
  email: string;
  username: string;
  password: string;
}

export function signup(params: SignupRequestParams) {
  return authClient.post('/signup', params);
}
