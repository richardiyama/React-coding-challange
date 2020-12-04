import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './HeaderBanner.css';

const HeaderBanner = ({ content }) => (
  <div className="header-banner shadow gradient-grey">
    <div className="wrapper">
      <div className="header-banner-content">{content}</div>
    </div>
  </div>
);

HeaderBanner.propTypes = {
  content: PropTypes.node.isRequired,
};

export default HeaderBanner