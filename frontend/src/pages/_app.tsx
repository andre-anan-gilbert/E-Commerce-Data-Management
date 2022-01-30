import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import { GlobalStyle } from "../styles/global-style";
import { Theme } from "../styles/theme";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
