import useSWR from 'swr';
import { appApiClient as api } from 'utils/apiClient';

import { useAuthToken } from './useAuthToken';

export function useChats(roomId: number) {
  const [authToken] = useAuthToken();

  return useSWR(
    authToken != null ? ['chats', authToken, roomId] : null,
    (_, token, roomId) => api.chats(token, roomId),
    { suspense: true }
  );
}
