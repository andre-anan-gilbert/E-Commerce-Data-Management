/** The layout component of the application. */
import { ReactNode } from 'react';
import { Footer } from '@ui/Footer/Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
