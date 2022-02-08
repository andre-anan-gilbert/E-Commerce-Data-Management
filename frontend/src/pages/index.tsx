import type { ReactElement } from "react";
import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Layout from "../components/layout/Layout";
import Navbar from "../components/ui/Navbar";
import { H1, H2, H3, H4, H5, H6 } from "@blueprintjs/core";

const Home: NextPage = () => {
  return (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navbar />
        {page}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
