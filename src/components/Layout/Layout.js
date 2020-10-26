// @flow strict
import React from 'react';
import Footer from "../Footer";
import Header from "../Header";
//import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';

type Props = {
  children: ReactNode
};

const Layout = ({
  children 
}: Props) => {
  //Not needed since hosting media on cloudinary
  //const metaImageUrl = url + withPrefix(metaImage);
  return (
    <div>
      <div className="bg-charcoal text-gray-100 min-h-screen relative">
        <Header />
        <div className="pb-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
