import { SSRSuspense } from '@stillmine/react-components';
import { GlobalStyles } from 'components/GlobalStyles';
import { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

const MovieApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary fallback={<p>error</p>}>
        <SSRSuspense fallback={<p>loading</p>}>
          <Component {...pageProps} />
        </SSRSuspense>
      </ErrorBoundary>
    </>
  );
};

export default MovieApp;
