import React from 'react';
import styled from 'styled-components';
import CategoryWrapper from 'Components/Molecules/CategoryWrapper/CategoryWrapper';
import Reptiles from 'assets/CategoryImages/reptiles.jpg';
import Arachnids from 'assets/CategoryImages/arachnids.jpg';
import Accessories from 'assets/CategoryImages/accessories.jpg';

const Container = styled.div`
  width: auto;
  min-height: 71.1vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: hidden;
`;

const Category = () => (
  <Container>
    <CategoryWrapper image={Reptiles} path="shop/reptiles">
      Reptiles
    </CategoryWrapper>
    <CategoryWrapper image={Arachnids} path="shop/arachnids">
      Arachnids
    </CategoryWrapper>
    <CategoryWrapper image={Accessories} path="shop/accessories">
      Accessories
    </CategoryWrapper>
  </Container>
);

export default Category;
