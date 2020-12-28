import { createApiClient } from '@portfolio/api-client';

let apiClient;

export function createAppApiClient(baseURL: string) {
  if (apiClient == null) {
    apiClient = createApiClient(baseURL);
  }

  return {
    user() {
      return apiClient.get('/user');
    },
  };
}
