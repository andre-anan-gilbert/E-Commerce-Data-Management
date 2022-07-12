/** The customers page. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/Blueprint/BlueprintNavbar/BlueprintNavbar';
import { AppBackgroundSection } from '@sections/AppBackgroundSection/AppBackgroundSection';
import { ProductsSection } from '@sections/ProductsSection/ProductsSection';

const Products: NextPage = () => {
  return (
    <AppBackgroundSection>
      <ProductsSection />
    </AppBackgroundSection>
  );
};

// @ts-ignore
Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlueprintNavbar />
      {page}
    </Layout>
  );
};

export default Products;
