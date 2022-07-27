/** The products page. */
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Layout } from '@layout/Layout';
import { BlueprintNavbar } from '@ui/BlueprintNavbar/BlueprintNavbar';
import { AuthGuardSection } from '@sections/AuthGuardSection/AuthGuardSection';
import { ProductsSection } from '@sections/ProductsSection/ProductsSection';
import { dehydrate, QueryClient } from 'react-query';
import { fetchUser } from '@queries/user';

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

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('user', fetchUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Products;
