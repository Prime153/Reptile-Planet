import styled from 'styled-components';
import { Field } from 'formik';
import Leaf from 'assets/leaf.png';
import Leaf2 from 'assets/leaf2.png';
import Heading from 'Components/Atoms/Heading';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 5rem;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  background-color: ${({ theme }) => theme.green};
  background-image: url(${Leaf2}), url(${Leaf});
  background-repeat: no-repeat;
  background-position: 90%, left;
  text-align: center;

  @media screen and (max-width: 690px) {
    padding: 1rem 3rem;
    background-image: url(${Leaf});
    background-position: 150%;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const StyledInput = styled(Field)`
  padding: 1rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  width: 40%;
  height: 44px;
  background-color: ${({ theme }) => theme.darkGreen};
  color: white;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }
  :active {
    filter: brightness(60%);
  }

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    height: 40px;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;
