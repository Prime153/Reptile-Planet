import React from 'react';
import PropTypes from 'prop-types';
import HeadingWrapper from 'Components/Organisms/HeadingWrapper';
import Footer from 'Components/Organisms/Footer';

const UserPageTemplate = ({ children }) => (
  <>
    <HeadingWrapper />
    {children}
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;
