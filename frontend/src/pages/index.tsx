/** The landing page which the users first see. */
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/ui/';
import {
  HeroSection,
  OverviewSection,
  TechnologyStackSection,
  OutroSection,
} from '../components/sections';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <TechnologyStackSection />
      <OutroSection />
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navbar />
        {page}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
