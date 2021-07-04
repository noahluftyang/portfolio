import 'sanitize.css';

import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles } from 'components/GlobalStyles';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <SWRConfig value={{ suspense: true }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  );
};
