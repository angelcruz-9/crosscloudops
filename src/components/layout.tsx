import React, { ReactNode } from 'react';
import Navigation from './header/navigation';
import Footer from './footer/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="content">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
