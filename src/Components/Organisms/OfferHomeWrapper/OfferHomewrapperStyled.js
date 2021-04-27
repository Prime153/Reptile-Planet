import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';

export const Container = styled.div`
  width: 1300px;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  color: ${({ theme }) => theme.darkGreen};
  font-weight: 500;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 1300px) {
    width: 90%;
  }

  div {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }
`;

export const HeadingStyled = styled(Heading)`
  color: black;
  margin-bottom: 1rem;
`;
