/** The layout component of the application. */
import { ReactNode } from 'react';
import Footer from '../ui/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
