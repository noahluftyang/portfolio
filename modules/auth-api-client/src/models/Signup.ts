export interface SignupRequestParams {
  email: string;
  username: string;
  password: string;
  service: 'CHATTING' | 'SOCIAL_NETWORKING';
}

export interface SignupResponseBody {}
