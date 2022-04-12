/** The layout component of the application. */
import { ReactNode } from 'react';
import { Footer } from '../ui';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
