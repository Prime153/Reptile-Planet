import React from 'react';
import LogoImage from 'assets/Logo/Logo.webp';
import LogoImage2 from 'assets/Logo/Logo2.webp';
import LogoImage3 from 'assets/Logo/Logo3.webp';
import BasketWrapper from 'Components/Molecules/BasketWrapper/BasketWrapper';
import { Container } from './LogoStyled';

const Logo = () => (
  <Container>
    <picture>
      <source media="(max-width: 850px)" srcSet={LogoImage3} />
      <source media="(max-width: 402px)" srcSet={LogoImage2} />
      <img src={LogoImage} alt="Logo" />
    </picture>
    <BasketWrapper />
  </Container>
);

export default Logo;
