/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import {
  changeBox as changeBoxAction,
  sortLowHigh as sortLowHighAction,
  sortHighLow as sortHighLowAction,
  position as positionAction,
} from 'Actions/index';

import {
  Container,
  HeadingContainer,
  HeadingStyled,
  SortingContainer,
  SortBy,
  ProductsContainer,
  LineButton,
  BoxButton,
} from './ProductsTemplateStyled';

const ProductsTemplate = ({ productsType, children, boxView }) => {
  const dispatch = useDispatch();
  const changeBox = (change) => dispatch(changeBoxAction(change));
  const sortLowHigh = (type) => dispatch(sortLowHighAction(type));
  const sortHighLow = (type) => dispatch(sortHighLowAction(type));
  const position = (type) => dispatch(positionAction(type));

  const change = (e) => {
    if (e.target.value === 'position') {
      position(productsType.toLowerCase());
    } else if (e.target.value === 'low') {
      sortLowHigh(productsType.toLowerCase());
    } else if (e.target.value === 'high')
      sortHighLow(productsType.toLowerCase());
  };

  return (
    <Container>
      <HeadingContainer>
        <HeadingStyled>{productsType}</HeadingStyled>
      </HeadingContainer>
      <SortingContainer>
        <div>
          Sort by:{' '}
          <SortBy onChange={(e) => change(e)}>
            <option value="position">Position</option>
            <option value="low">Price: low - high</option>
            <option value="high">Price: high - low</option>
          </SortBy>
        </div>
        <div>
          <BoxButton
            active={boxView}
            onClick={() => changeBox(true)}
            alt="Boxes"
          />
          <LineButton
            active={boxView}
            onClick={() => changeBox(false)}
            alt="Line"
          />
        </div>
      </SortingContainer>
      <ProductsContainer box={boxView}>{children}</ProductsContainer>
    </Container>
  );
};

ProductsTemplate.propTypes = {
  productsType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  boxView: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ boxView }) => ({ boxView });
export default connect(mapStateToProps)(ProductsTemplate);
