import useSWR from 'swr';
import { appApiClient as api } from 'utils/apiClient';

import { useAuthToken } from './useAuthToken';

export function useRooms() {
  const { authToken, isSignedin } = useAuthToken();

  return useSWR(isSignedin ? ['rooms', authToken] : null, (_, token) => api.rooms(token), {
    suspense: true,
  });
}
