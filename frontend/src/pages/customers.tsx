import type { ReactElement } from "react";
import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import BlueprintNavbar from "../components/ui/BlueprintNavbar";

const Customers: NextPage = () => {
  return <>Customers</>;
};

// @ts-ignore
Customers.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlueprintNavbar />
      {page}
    </Layout>
  );
};

export default Customers;
