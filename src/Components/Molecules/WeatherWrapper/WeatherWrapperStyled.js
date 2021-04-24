import styled, { css } from 'styled-components';
import Heading from 'Components/Atoms/Heading';

export const Container = styled.div`
  width: 500px;
  height: 638px;
  display: grid;
  grid-template-rows: 0.1fr 0.2fr 0.4fr 0.2fr 0.1fr 0.2fr;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};
  justify-items: center;
  text-align: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.green};
  padding: 1rem 4rem;
  margin: 3rem;

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 400px;
    height: 500px;
  }

  @media screen and (max-width: 464px) {
    padding: 1rem 2rem;
  }

  span {
    font-weight: 500;

    :nth-child(2) {
      font-weight: 400;
      color: #666666;
    }
    :nth-child(3) {
      font-weight: bold;
    }
    :nth-child(4) {
      font-weight: 300;
      color: #666666;
    }
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.green};
`;

export const StyledInput = styled.input`
  text-align: center;
  width: 70%;
  height: 50px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    height: 30px;
  }
`;

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  width: 30%;
  height: 50px;
  background-color: ${({ theme }) => theme.green};
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
    height: 30px;
  }
`;

export const TempText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: green;

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  span {
    color: #3399ff;
  }

  ${({ red }) =>
    red &&
    css`
      color: red;
      @media screen and (max-width: 690px) {
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
      span {
        color: #3399ff;
      }
    `}
`;
