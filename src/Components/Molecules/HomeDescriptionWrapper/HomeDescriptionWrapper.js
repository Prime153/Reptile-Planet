import React from 'react';
import Heading from 'Components/Atoms/Heading';
import PropTypes from 'prop-types';
import Img from 'assets/Wrapper/Wrapper.png';
import Img2 from 'assets/Wrapper/Wrapper2.jpg';
import Img3 from 'assets/Wrapper/Wrapper3.jpg';

import {
  Container,
  ContentContainer,
  Image,
} from './HomeDescriptionWrapperStyled';

const HomeDescriptionWrapper = ({ second }) => (
  <Container>
    {second ? (
      <>
        <Image src={Img3} second />
        <ContentContainer second>
          <Heading>Meet Us</Heading>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </span>
        </ContentContainer>
        <Image src={Img2} second />
      </>
    ) : (
      <>
        <ContentContainer>
          <Heading>Visit our store</Heading>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </span>
        </ContentContainer>
        <Image src={Img} />
      </>
    )}
  </Container>
);

HomeDescriptionWrapper.propTypes = {
  second: PropTypes.bool,
};

HomeDescriptionWrapper.defaultProps = {
  second: null,
};

export default HomeDescriptionWrapper;
