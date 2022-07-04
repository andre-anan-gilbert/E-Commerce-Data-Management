/** The landing page which the users first see. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { Navbar } from '@ui/Navbar/Navbar';
import { HeroSection } from '@sections/HeroSection/HeroSection';
import { OverviewSection } from '@sections/OverviewSection/OverviewSection';
import { AuthenticationSection } from '@sections/AuthenticationSection/AuthenticationSection';
import { TechStackSection } from '@sections/TechStackSection/TechStackSection';
import { OutroSection } from '@sections/OutroSection/OutroSection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <AuthenticationSection />
      <TechStackSection />
      <OutroSection />
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

export default Home;
