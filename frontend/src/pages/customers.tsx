/** The customers page. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/Blueprint/BlueprintNavbar/BlueprintNavbar';

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
