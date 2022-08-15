/** The home page of the data management application. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/BlueprintNavbar/BlueprintNavbar';
import { HomeSection } from '@sections/HomeSection/HomeSection';
import { RequireAuth } from '@auth/RequireAuth';

const Home: NextPage = () => {
  return (
    <RequireAuth>
      <HomeSection />
    </RequireAuth>
  );
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
