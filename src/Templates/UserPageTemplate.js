import React from 'react';
import PropTypes from 'prop-types';
import HeadingWrapper from 'Components/Organisms/HeadingWrapper';
import Footer from 'Components/Organisms/Footer';
import NewsletterWrapper from 'Components/Molecules/NewsletterWrapper/NewsletterWrapper';

const UserPageTemplate = ({ children }) => (
  <>
    <HeadingWrapper id="smooth" />
    {children}
    <NewsletterWrapper />
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;
