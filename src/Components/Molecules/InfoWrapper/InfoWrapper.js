import React from 'react';

import {
  Container,
  TextContainer,
  TruckStyled,
  MoneyStyled,
  CheckStyled,
} from './InfoWrapperStyled';

const InfoWrapper = () => (
  <Container>
    <TextContainer>
      <TruckStyled />
      Same day shipping if order before 2pm
    </TextContainer>
    <TextContainer>
      <MoneyStyled />
      Free delivery on orders over 200 PLN
    </TextContainer>
    <TextContainer>
      <CheckStyled />
      We will try to beat any quote!
    </TextContainer>
  </Container>
);

export default InfoWrapper;
