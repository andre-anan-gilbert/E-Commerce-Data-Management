/** The home page of the data management application. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/Blueprint/BlueprintNavbar/BlueprintNavbar';
import { AuthGuardSection } from '@sections/AuthGuardSection/AuthGuardSection';
import { HomeSection } from '@sections/HomeSection/HomeSection';

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
