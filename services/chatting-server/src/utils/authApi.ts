import axios from 'axios';

import { environments } from './environments';

export const authApi = axios.create({
  baseURL: environments.AUTH_API_URL,
});
