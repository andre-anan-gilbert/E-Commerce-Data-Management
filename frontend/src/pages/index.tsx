/** The landing page which the users first see. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/ui/';
import {
  HeroSection,
  OverviewSection,
  TechStackSection,
  OutroSection,
} from '../components/sections';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
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
