import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItemToChart as addToChartAction } from 'Actions/index';
import { Container } from './ButtonStyled';

const Button = ({ order, id, type }) => {
  const dispatch = useDispatch();
  const addToChart = (itemId, pageType) =>
    dispatch(addToChartAction(itemId, pageType));

  return order ? (
    <Container order>Submit your order</Container>
  ) : (
    <Container onClick={() => addToChart(id, type)}>
      Add to cart
    </Container>
  );
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  order: PropTypes.string,
};

Button.defaultProps = {
  order: null,
};

export default Button;
