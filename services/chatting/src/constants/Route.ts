const APP_ROUTE_ROOT = '/app';

export const APP_ROUTE = {
  HOME: APP_ROUTE_ROOT,
  ROOM: `${APP_ROUTE_ROOT}/room`,
} as const;

const AUTH_ROUTE_ROOT = '/auth';

export const AUTH_ROUTE = {
  LANDING: AUTH_ROUTE_ROOT,
  SIGNIN: `${AUTH_ROUTE_ROOT}/signin`,
  SIGNUP: `${AUTH_ROUTE_ROOT}/signup`,
} as const;
