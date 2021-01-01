import 'tailwindcss/dist/base.min.css';
import 'tailwindcss/dist/components.min.css';

import { Skeleton } from '@material-ui/lab';
import { SSRSuspense } from 'components/mod';
import { RecoilRoot } from 'recoil';

const ChattingApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <SSRSuspense fallback={<Skeleton />}>
        <Component {...pageProps} />
      </SSRSuspense>
    </RecoilRoot>
  );
};

export default ChattingApp;
