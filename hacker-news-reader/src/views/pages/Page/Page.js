import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import { PageWrapper } from './styles';

const Page = ({ children }) => (
  <PageWrapper>
    <Navbar/>
    <main>
      {children}
    </main>
    <Footer/>
  </PageWrapper>
);

export default Page;
