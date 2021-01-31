import { GlobalStyles } from 'components/GlobalStyles';
import { SSRSuspense } from 'components/SSRSuspense';
import { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

export default function MovieApp({ Component, pageProps }: AppProps) {
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
}
