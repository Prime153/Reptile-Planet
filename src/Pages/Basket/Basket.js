import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasketCard from 'Components/Molecules/BasketCard/BasketCard';

import {
  Container,
  HeadingStyled,
  OrderContainer,
  CardsContainer,
  EmptyCartContainer,
  BasketCase,
  TotalContainer,
} from './BasketStyled';

const Basket = ({ basket, total }) => (
  <UserPageTemplate>
    {basket.length === 0 ? (
      <EmptyCartContainer>
        <BasketCase />
      </EmptyCartContainer>
    ) : (
      <Container>
        <HeadingStyled>Checkout</HeadingStyled>
        <OrderContainer>
          <CardsContainer>
            {basket.map((elem) => (
              <BasketCard
                key={elem.id}
                id={elem.id}
                picture={elem.picture}
                species={elem.species}
                name={elem.name}
                price={elem.price}
                count={elem.count}
                birth={elem.birth}
                order={elem.order}
                category={elem.category}
              />
            ))}
          </CardsContainer>
        </OrderContainer>
        <TotalContainer>
          <div> Grand Total:</div>
          <div>
            {' '}
            {Math.round(total)}.00 PLN
            <span>+ Shipping Cost 20 PLN</span>
          </div>
        </TotalContainer>
      </Container>
    )}
  </UserPageTemplate>
);

Basket.propTypes = {
  basket: PropTypes.instanceOf(Array).isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = ({ basket, total }) => ({ basket, total });

export default connect(mapStateToProps)(Basket);
