/** The home page of the data management application. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/BlueprintNavbar/BlueprintNavbar';
import { AuthGuardSection } from '@sections/AuthGuardSection/AuthGuardSection';
import { HomeSection } from '@sections/HomeSection/HomeSection';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useAxiosClient } from '@queries/axios';

const Home: NextPage = () => {
  return (
    <AuthGuardSection>
      <HomeSection />
    </AuthGuardSection>
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
