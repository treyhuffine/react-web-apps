import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Page = ({ pageName, children }) => (
  <div className={pageName}>
    <Navbar/>
    <main>
      {children}
    </main>
    <Footer/>
  </div>
);

Page.defaultProps = {
  pageName: ''
};

Page.propTypes = {
  pageName: PropTypes.string
};

export default Page;
