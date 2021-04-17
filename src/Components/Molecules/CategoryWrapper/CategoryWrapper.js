// eslint-disable-line no-unused-vars

import React from 'react';
import {
  Container,
  HeadingStyled,
} from 'Components/Molecules/CategoryWrapper/CategoryWrapperStyled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryWrapper = ({ children, path, width, image }) => (
  <Container width={width} as={Link} to={path} image={image}>
    <HeadingStyled>{children}</HeadingStyled>
  </Container>
);

CategoryWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  image: PropTypes.string,
};

CategoryWrapper.defaultProps = {
  width: '33.3%',
  image: null,
};

export default CategoryWrapper;
