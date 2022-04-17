/** The home page of the data management application. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/Blueprint/BlueprintNavbar/BlueprintNavbar';

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
