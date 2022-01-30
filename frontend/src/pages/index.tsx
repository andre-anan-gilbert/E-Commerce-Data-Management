import type { NextPage } from "next";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6 } from "@blueprintjs/core";

const Home: NextPage = () => {
  return (
    <Page>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  padding: 5rem 0;
`;
