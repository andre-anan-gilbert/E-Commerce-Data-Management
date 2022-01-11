import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 16px;
  }
`;
