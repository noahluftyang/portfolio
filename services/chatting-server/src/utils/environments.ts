import * as dotenv from 'dotenv';

const STAGE = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${STAGE}` });

export const environments = {
  AUTH_API_URL: process.env.AUTH_API_URL || 'http://localhost:8000',
  PORT: process.env.PORT || 8001,
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
};
