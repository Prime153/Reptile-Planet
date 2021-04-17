import React from 'react';
import styled from 'styled-components';
import CategoryWrapper from 'Components/Molecules/CategoryWrapper/CategoryWrapper';
import PropTypes from 'prop-types';
import UserPageTemplate from 'Templates/UserPageTemplate';
import Lizards from 'assets/CategoryImages/lizards.jpg';
import Snakes from 'assets/CategoryImages/snakes.jpg';
import Tarantulas from 'assets/CategoryImages/tarantulas.jpg';
import Scorpions from 'assets/CategoryImages/scorpions.jpg';

const Container = styled.div`
  width: auto;
  min-height: 70vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: hidden;
`;

const DetailsCategory = ({ reptiles }) => (
  <UserPageTemplate>
    <Container>
      {reptiles ? (
        <>
          <CategoryWrapper
            image={Lizards}
            width="50%"
            path="/shop/reptiles/lizards"
          >
            Lizards
          </CategoryWrapper>
          <CategoryWrapper
            image={Snakes}
            width="50%"
            path="/shop/reptiles/snakes"
          >
            Snakes
          </CategoryWrapper>
        </>
      ) : (
        <>
          <CategoryWrapper
            image={Tarantulas}
            width="50%"
            path="/shop/arachnids/tarantulas"
          >
            Tarantulas
          </CategoryWrapper>
          <CategoryWrapper
            image={Scorpions}
            width="50%"
            path="/shop/arachnids/scorpions"
          >
            Scorpions
          </CategoryWrapper>
        </>
      )}
    </Container>
  </UserPageTemplate>
);

DetailsCategory.propTypes = {
  reptiles: PropTypes.bool,
};

DetailsCategory.defaultProps = {
  reptiles: false,
};

export default DetailsCategory;
