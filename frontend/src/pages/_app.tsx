import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { GlobalStyle } from "../styles/global-style";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default App;
