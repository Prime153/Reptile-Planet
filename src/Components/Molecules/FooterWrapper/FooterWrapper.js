import React from 'react';
import FooterLogo from 'assets/FooterLogo/FooterLogo.webp';
import FooterLogo2 from 'assets/FooterLogo/FooterLogo2.webp';
import FooterLogo3 from 'assets/FooterLogo/FooterLogo3.webp';
import Heading from 'Components/Atoms/Heading';
import {
  Container,
  InfoContainer,
  PhoneNumbersContainer,
  PhoneNumberText,
  LowerPhoneNumberText,
  LogoContainer,
} from './FooterWrapperStyled';

const FooterWrapper = () => (
  <Container>
    <InfoContainer>
      <Heading>Call us for any information</Heading>
      <PhoneNumbersContainer>
        <PhoneNumberText>
          +34 789 678 456
          <LowerPhoneNumberText>
            <b>Online Order</b> Enquiries - Monday to Friday
          </LowerPhoneNumberText>
        </PhoneNumberText>

        <PhoneNumberText>
          +34 564 764 283
          <LowerPhoneNumberText>
            <b>In-store</b> Shop Enquiries - Monday to Sunday
          </LowerPhoneNumberText>
        </PhoneNumberText>
      </PhoneNumbersContainer>
    </InfoContainer>
    <LogoContainer>
      <picture>
        <source media="(max-width: 850px)" srcSet={FooterLogo2} />
        <source media="(max-width: 402px)" srcSet={FooterLogo3} />
        <img src={FooterLogo} alt="Logo" />
      </picture>
    </LogoContainer>
  </Container>
);

export default FooterWrapper;
