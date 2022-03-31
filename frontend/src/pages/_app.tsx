import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from '../styles/global-style';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * App component to initialize pages.
 * @param {AppPropsWithLayout} Component - The active page.
 * @return {JSX.Element}
 */
function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
