import { useCallback } from 'react';
import useSWR from 'swr';
import { SigninFormFields, SignupFormFields } from 'types/Auth';
import { authApiClient as api } from 'utils/apiClient';

import { useAuthToken } from './useAuthToken';

export function useUser() {
  const { authToken, isSignedin, setAuthToken } = useAuthToken();
  const swrValues = useSWR(isSignedin ? ['user', authToken] : null, (_, token) => api.user(token), {
    suspense: true,
  });

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
    isSignedin,
    signin,
    signout,
    signup,
  } as const;
}
