import { ReactElement } from "react";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import BlueprintNavbar from "../components/ui/BlueprintNavbar";

const Home: NextPage = () => {
  return <>Home</>;
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlueprintNavbar />
      {page}
    </Layout>
  );
};

export default Home;
