import { validate, version } from 'uuid';

export function isNil(value?: string | null) {
  return value == null;
}

export enum UUIDVersion {
  v1 = 1,
  v2 = 2,
  v3 = 3,
  v4 = 4,
  v5 = 5,
}

export function isUUIDV4(value?: string | null) {
  return !isNil(value) && validate(value) && version(value) === UUIDVersion.v4;
}
