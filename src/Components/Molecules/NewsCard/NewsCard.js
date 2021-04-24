import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CardContainer,
  AreaContainer,
  Image,
  HeadingText,
  Text,
  DateText,
} from './NewsCardStyled';

const NewsCard = ({ side, image, date, heading, text }) => (
  <Container order={side}>
    <AreaContainer order={side}>
      <CardContainer>
        <Image image={image} />
        <DateText>{date} </DateText>
        <HeadingText>{heading}</HeadingText>
        <Text>{text}</Text>
      </CardContainer>
    </AreaContainer>
  </Container>
);

NewsCard.propTypes = {
  side: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCard;
