import useSWR from 'swr';
import { appApiClient as api } from 'utils/apiClient';

import { useAuthToken } from './useAuthToken';

export function useRooms() {
  const [authToken] = useAuthToken();

  return useSWR(authToken != null ? ['rooms', authToken] : null, (_, token) => api.rooms(token), {
    suspense: true,
  });
}
