import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';

const Page = ({ pageName, children }) => (
  <div className={pageName}>
    <Navbar />
    {children}
  </div>
);

Page.defaultProps = {
  pageName: ''
};

Page.propTypes = {
  pageName: PropTypes.string
};

export default Page;
