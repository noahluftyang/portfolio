import * as dotenv from 'dotenv';

const STAGE = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${STAGE}` });

export const environments = {
  GOOGLE: {
    CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  PORT: process.env.PORT || 8000,
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
};
