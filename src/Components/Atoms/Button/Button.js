import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItemToChart as addToChartAction } from 'Actions/index';
import { Container } from './ButtonStyled';

const Button = ({ order, id, type, children }) => {
  const dispatch = useDispatch();
  const addToChart = (itemId, pageType) =>
    dispatch(addToChartAction(itemId, pageType));

  return order ? (
    <Container order> {children}</Container>
  ) : (
    <Container onClick={() => addToChart(id, type)}>
      Add to chart
    </Container>
  );
};

Button.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  order: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  id: null,
  order: false,
  children: null,
};

export default Button;
