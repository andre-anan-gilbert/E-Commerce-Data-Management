/** The layout component of the application. */
import { ReactNode } from 'react';
import { Footer } from '@ui/Footer/Footer';

type LayoutProps = {
  // children: ReactNode;
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
