import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from 'components/base/GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <title>hrmm.xyz :: Voting!</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
