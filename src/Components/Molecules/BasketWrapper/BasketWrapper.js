import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  ShoopingCart,
  MobileShoppingCart,
  MobileBasketCircle,
} from './BasketWrapperStyled';

const BasketWrapper = ({ basket, total }) => (
  <>
    <Container as={Link} to="/basket">
      <span>{basket.length} items</span>
      <span>{Math.round(total)}.00 PLN</span>
      <ShoopingCart />
    </Container>
    <MobileShoppingCart as={Link} to="/basket">
      <MobileBasketCircle>{basket.length}</MobileBasketCircle>
      <ShoopingCart />
    </MobileShoppingCart>
  </>
);

BasketWrapper.propTypes = {
  basket: PropTypes.instanceOf(Array).isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = ({ basket, total }) => ({ basket, total });
export default connect(mapStateToProps)(BasketWrapper);
