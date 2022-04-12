/** The landing page which the users first see. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/ui/';
import {
  HeroSection,
  TechnologyStackSection,
  OutroSection,
} from '../components/sections';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
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
