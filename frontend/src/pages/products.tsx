/** The products page. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/Blueprint/BlueprintNavbar/BlueprintNavbar';
import { AuthGuardSection } from '@sections/AuthGuardSection/AuthGuardSection';
import { ProductsSection } from '@sections/ProductsSection/ProductsSection';

const Products: NextPage = () => {
  return (
    <AuthGuardSection>
      <ProductsSection />
    </AuthGuardSection>
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
