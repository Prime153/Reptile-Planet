/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  removeItemFromChart as removeItemFromChartAction,
  addQuantity as addQuantityAction,
  removeQuantity as removeQuantityAction,
} from 'Actions/index';

import {
  Container,
  Image,
  RemoveIcon,
  PlusIcon,
  MinusIcon,
  SpeciesContainer,
  ProductInoContainer,
  GlobalInfoContainer,
  LinkStyled,
} from './BasketCardStyled';

const BasketCard = ({
  picture,
  species,
  birth,
  price,
  count,
  id,
  order,
  category,
}) => {
  const dispatch = useDispatch();
  const removeItem = (itemId) =>
    dispatch(removeItemFromChartAction(itemId));
  const addQuantity = (itemId) => dispatch(addQuantityAction(itemId));
  const removeQuantity = (itemId) =>
    dispatch(removeQuantityAction(itemId));

  return (
    <Container>
      <Image src={picture} alt={species} />
      <GlobalInfoContainer>
        <SpeciesContainer>
          <LinkStyled
            to={
              order === 'shop'
                ? `/shop/${category}/${id}`
                : `/shop/${order}/${category}/${id}`
            }
          >
            {species} {birth}
          </LinkStyled>
        </SpeciesContainer>
        <ProductInoContainer>
          <span>{price} PLN</span>
          <span>
            <MinusIcon onClick={() => removeQuantity(id)} />
            {count}
            <PlusIcon onClick={() => addQuantity(id)} />
          </span>
          <span>{count * Math.round(price)} PLN</span>
        </ProductInoContainer>
      </GlobalInfoContainer>
      <RemoveIcon onClick={() => removeItem(id)} />
    </Container>
  );
};

BasketCard.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  species: PropTypes.string,
  birth: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

BasketCard.defaultProps = {
  species: null,
};

export default BasketCard;
