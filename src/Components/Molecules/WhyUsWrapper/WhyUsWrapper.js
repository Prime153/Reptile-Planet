import React from 'react';
import {
  Container,
  HeadingContainer,
  CardContainer,
  Card,
  CardHeadings,
  Text,
  StyledHeading,
  IconBulb,
  IconMessage,
  IconCart,
} from './WhyUsWrapperStyled';

const WhyUsWrapper = () => (
  <Container>
    <HeadingContainer>
      <StyledHeading>Why Reptile Planet?</StyledHeading>
      <Text>
        We believe in providing the best animals at the best prices.
        With a a variety of offerings, superb support and a secure
        checkout you’re in good hands.
      </Text>
    </HeadingContainer>
    <CardContainer>
      <Card>
        <IconBulb />
        <CardHeadings>Amazing Selection</CardHeadings>
        <Text>
          With thousands of animals, supplies, feeders and more, we
          guarantee you’ll find exactly what you’re looking for.
        </Text>
      </Card>
      <Card>
        <IconMessage />

        <CardHeadings>Outstanding Support</CardHeadings>
        <Text>
          Our customer support is second to none – customers rave
          about how we don’t rest until every issue is solved to their
          satisfaction.
        </Text>
      </Card>
      <Card>
        <IconCart />
        <CardHeadings>Secure Checkout</CardHeadings>
        <Text>
          With 128-bit SSL security with advanced encryption you are
          guaranteed that your purchases are safe.
        </Text>
      </Card>
    </CardContainer>
  </Container>
);

export default WhyUsWrapper;
