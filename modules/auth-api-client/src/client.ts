import { createApiClient } from '@portfolio/api-client';

import {
  SigninRequestParams,
  SigninResponseBody,
  SignupRequestParams,
  SignupResponseBody,
} from './models/mod';

let apiClient;

export function createAuthApiClient(baseURL: string) {
  if (apiClient == null) {
    apiClient = createApiClient(baseURL);
  }

  return {
    signin(params: SigninRequestParams) {
      return apiClient.post<SigninResponseBody>('/signin', params);
    },
    signup(params: SignupRequestParams) {
      return apiClient.post<SignupResponseBody>('/signup', params);
    },
    user(token: string) {
      return apiClient.get('/user', token);
    },
  };
}
