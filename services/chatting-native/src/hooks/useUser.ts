import { SigninFormFields, SignupFormFields } from '@portfolio/chatting-app-types';
import { useCallback } from 'react';
import useSWR from 'swr';
import { authApiClient as api } from 'utils/apiClient';

import { useAuthToken } from './useAuthToken';

export function useUser() {
  const [authToken, setAuthToken] = useAuthToken();
  const swrValues = useSWR(authToken != null ? ['user', authToken] : null, (_, token) =>
    api.user(token)
  );

  const signin = useCallback(
    async (fields: SigninFormFields) => {
      const { status, token } = await api.signin({
        ...fields,
        service: 'CHATTING',
      });

      if (status === 'SUCCESS') {
        setAuthToken(token);
      }

      return { status };
    },
    [setAuthToken]
  );

  const signup = useCallback(
    async ({ username, ...fields }: SignupFormFields) => {
      await api.signup({
        ...fields,
        service: 'CHATTING',
        username,
      });

      return signin(fields);
    },
    [signin]
  );

  const signout = useCallback(() => {
    setAuthToken(null);
  }, [setAuthToken]);

  return {
    ...swrValues,
    isSignedin: authToken != null,
    signin,
    signout,
    signup,
  } as const;
}
