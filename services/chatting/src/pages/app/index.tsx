import { AUTH_ROUTE } from 'constants/Route';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { appApiClient as api } from 'utils/apiClient';

const AppLandingPage = () => {
  const { data } = useSWR('user', api.user, { suspense: true });
  const { replace } = useRouter();

  useEffect(() => {
    if (data == null) {
      replace(AUTH_ROUTE.Home);
    }
  }, [data, replace]);

  return <div>landing</div>;
};

export default AppLandingPage;
