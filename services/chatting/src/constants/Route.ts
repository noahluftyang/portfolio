const AUTH_ROUTE_ROOT = '/auth';

export const AUTH_ROUTE = {
  Home: AUTH_ROUTE_ROOT,
  Signin: `${AUTH_ROUTE_ROOT}/signin`,
  Signup: `${AUTH_ROUTE_ROOT}/signup`,
} as const;
