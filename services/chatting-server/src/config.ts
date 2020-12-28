import * as dotenv from 'dotenv';

const STAGE = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${STAGE}` });

export const config = {
  PORT: process.env.PORT || 8001,
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
};
