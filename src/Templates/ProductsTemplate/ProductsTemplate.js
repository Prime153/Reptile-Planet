import React, { useEffect } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

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
  ScrollContainer,
  CartStyled,
  ArrowStyled,
  BasketCircle,
  HashLinkStyled,
} from './ProductsTemplateStyled';

const ProductsTemplate = ({
  productsType,
  children,
  boxView,
  basket,
}) => {
  const dispatch = useDispatch();
  const changeBox = (change) => dispatch(changeBoxAction(change));
  const sortLowHigh = (type) => dispatch(sortLowHighAction(type));
  const sortHighLow = (type) => dispatch(sortHighLowAction(type));
  const position = (type) => dispatch(positionAction(type));
  const [handleScroll, changeScroll] = useStateIfMounted(false);

  useEffect(() => {
    const WindowScroll = () =>
      window.scrollY >= 500
        ? changeScroll(true)
        : changeScroll(false);

    window.addEventListener('scroll', WindowScroll);
  });

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
      <ScrollContainer appear={handleScroll}>
        <HashLinkStyled to="/basket">
          <button type="button">
            <CartStyled />
          </button>
          <BasketCircle>{basket.length}</BasketCircle>
        </HashLinkStyled>

        <HashLink smooth to="#">
          <button type="button">
            <ArrowStyled />
          </button>
        </HashLink>
      </ScrollContainer>
      <ProductsContainer box={boxView}>{children}</ProductsContainer>
    </Container>
  );
};

ProductsTemplate.propTypes = {
  productsType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  boxView: PropTypes.bool.isRequired,
  basket: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ boxView, basket }) => ({
  boxView,
  basket,
});
export default connect(mapStateToProps)(ProductsTemplate);
