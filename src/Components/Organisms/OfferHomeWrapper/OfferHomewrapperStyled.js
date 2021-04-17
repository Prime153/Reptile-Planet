import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  color: ${({ theme }) => theme.darkGreen};
  font-weight: 500;
  margin-bottom: 3rem;

  div {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
`;

export const HeadingStyled = styled(Heading)`
  color: black;
  margin-bottom: 1rem;
`;
