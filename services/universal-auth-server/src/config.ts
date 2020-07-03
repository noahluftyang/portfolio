import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 8000,
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
};
