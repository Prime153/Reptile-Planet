import React from 'react';

import UserPageTemplate from 'Templates/UserPageTemplate';
import Line from 'Components/Atoms/Line/Line';
import {
  Container,
  ContactContainer,
  InfoContainer,
  StyledIFrame,
} from './ContactStyled';

const Contact = () => (
  <UserPageTemplate>
    <Container>
      <ContactContainer>
        <InfoContainer>
          <Line />
          <span>Reptile Planet Columbia, SC</span>
          <span>+34 789 678 456 +34 564 764 283</span>
          <span>contact@reptileplanet.com</span>
          <Line />
        </InfoContainer>

        <StyledIFrame
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4962.913429092631!2d18.308222179291352!3d51.5415238185632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a938b42890301%3A0x10a062f5d21fca5d!2sKONIEC%20%C5%9AWIATA!5e0!3m2!1spl!2spl!4v1619107934310!5m2!1spl!2spl"
          width="390px"
          height="388px"
        />
      </ContactContainer>
    </Container>
  </UserPageTemplate>
);

export default Contact;
