import { createApiClient } from '@portfolio/api-client';

export const storeApi = createApiClient({
  baseURL: 'https://fakestoreapi.com',
});
