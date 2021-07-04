import { createApiClient } from '@portfolio/api-client';

import {
  SigninRequestParams,
  SigninResponseBody,
  SignupRequestParams,
  SignupResponseBody,
} from './models/mod';

let authApi: ReturnType<typeof createApiClient>;

export function createAuthApiClient(baseURL: string) {
  if (authApi == null) {
    authApi = createApiClient({ baseURL });
  }

  return {
    signin(params: SigninRequestParams) {
      return authApi.post<SigninResponseBody>('/signin', { params });
    },
    signup(params: SignupRequestParams) {
      return authApi.post<SignupResponseBody>('/signup', { params });
    },
    user() {
      return authApi.get('/user');
    },
  };
}
