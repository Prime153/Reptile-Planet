/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container,
  SpeciesContainer,
  Species,
  Text,
  Image,
  BoxContainer,
  BoxImage,
  BoxSpeciesContainer,
  BoxSpecies,
  BoxText,
} from './ProductCardStyled';

const ProductCard = ({
  id,
  image,
  species,
  name,
  birth,
  category,
  order,
  price,
  home,
  boxView,
}) => {
  const handleHomelocation =
    home && order === 'shop'
      ? `/shop/${category}/${id}`
      : category === 'accessories';
  const handleLocation = handleHomelocation
    ? `/shop/${category}/${id}`
    : `/shop/${order}/${category}/${id}`;

  return home ? (
    <BoxContainer home as={Link} to={handleLocation}>
      <BoxImage home src={image} alt={species} />
      <BoxSpeciesContainer>
        <BoxSpecies home>{species}</BoxSpecies>
        <BoxText home>
          {name} {birth}
        </BoxText>
        <BoxText>{price} PLN</BoxText>
      </BoxSpeciesContainer>
    </BoxContainer>
  ) : (
    <>
      {boxView ? (
        <BoxContainer as={Link} to={handleLocation}>
          <BoxImage src={image} alt={species} />
          <BoxSpeciesContainer>
            <BoxSpecies>{species}</BoxSpecies>
            <BoxText>
              {name} {birth}
            </BoxText>
            <BoxText>{price} PLN</BoxText>
          </BoxSpeciesContainer>
        </BoxContainer>
      ) : (
        <Container as={Link} to={handleLocation}>
          <Image src={image} alt={species} />
          <SpeciesContainer>
            <div>
              <Species>{species}</Species>
              <Text>
                {name} {birth}
              </Text>
            </div>
            <div>
              <Text>{price} PLN</Text>
            </div>
          </SpeciesContainer>
        </Container>
      )}
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  order: PropTypes.string,
  name: PropTypes.string,
  birth: PropTypes.string,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  home: PropTypes,
  boxView: PropTypes.bool.isRequired,
};

ProductCard.defaultProps = {
  name: null,
  birth: null,
  category: null,
  order: null,
  home: false,
};

const mapStateToProps = ({ boxView }) => ({ boxView });
export default connect(mapStateToProps)(ProductCard);
