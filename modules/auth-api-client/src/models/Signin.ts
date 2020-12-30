export interface SigninRequestParams {
  email: string;
  password: string;
  service: 'CHATTING' | 'SOCIAL_NETWORKING';
}

export interface SigninResponseBody {
  status: string;
}
