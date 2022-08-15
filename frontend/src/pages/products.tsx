/** The products page. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/BlueprintNavbar/BlueprintNavbar';
import { ProductsSection } from '@sections/ProductsSection/ProductsSection';
import { RequireAuth } from '@auth/RequireAuth';

const Products: NextPage = () => {
  return (
    <RequireAuth>
      <ProductsSection />
    </RequireAuth>
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
