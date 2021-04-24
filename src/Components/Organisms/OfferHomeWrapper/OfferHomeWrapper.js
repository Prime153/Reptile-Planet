import React from 'react';
import ProductCard from 'Components/Molecules/ProductCard/ProductCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, HeadingStyled } from './OfferHomewrapperStyled';

const OfferHomeWrapper = ({ offer }) => (
  <Container>
    <div>
      <HeadingStyled>Today&apos;s offer:</HeadingStyled>
    </div>
    <div>
      {offer.map((elem) => (
        <ProductCard
          id={elem.id}
          key={elem.id}
          image={elem.picture}
          species={elem.species}
          name={elem.name}
          birth={elem.birth}
          price={elem.price}
          order={elem.order}
          category={elem.category}
          //  Received `true` for a non-boolean attribute `home` error due to React router. Can't find the solution
          home
        />
      ))}
    </div>
  </Container>
);

OfferHomeWrapper.propTypes = {
  offer: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ offer }) => ({ offer });
export default connect(mapStateToProps)(OfferHomeWrapper);
