/** The landing page which the users first see. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/ui/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { TechnologyStackSection } from '../components/sections/TechnologyStackSection';
import { OutroSection } from '../components/sections/OutroSection';

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
