import { createClient } from 'redis';

import { config } from './config';

export const redis = createClient(config.REDIS_URL);
