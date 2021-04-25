import styled from 'styled-components';

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
  margin: auto 0;

  @media screen and (max-width: 850px) {
    margin: 1rem 0;
    font-size: 4rem;
  }
`;

export default Heading;
