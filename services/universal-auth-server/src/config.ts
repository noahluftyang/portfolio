import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  GOOGLE: {
    CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  PORT: process.env.PORT || 8000,
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
};
