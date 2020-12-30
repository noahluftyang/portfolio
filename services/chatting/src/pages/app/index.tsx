import { Skeleton } from '@material-ui/lab';
import { Input } from '@portfolio/components';
import { SSRSuspense } from 'components/mod';
import { AUTH_ROUTE } from 'constants/Route';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { authApiClient as api } from 'utils/apiClient';

const AppContainer = () => {
  const { replace } = useRouter();
  const { data } = useSWR('user', api.user, { suspense: true });

  useEffect(() => {
    if (data == null) {
      replace(AUTH_ROUTE.LANDING);
    }
  }, [data, replace]);

  return (
    <div>
      hello
      <Input label="라벨" />
    </div>
  );
};

const AppHomePage = () => {
  return (
    <SSRSuspense fallback={<Skeleton />}>
      <AppContainer />
    </SSRSuspense>
  );
};

export default AppHomePage;
