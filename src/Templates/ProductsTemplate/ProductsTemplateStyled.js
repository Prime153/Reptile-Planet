import styled, { css } from 'styled-components';
import Heading from 'Components/Atoms/Heading';
import LineIcon from 'assets/LineIcon.svg';
import BoxesIcon from 'assets/BoxesIcon.svg';
import { FaShoppingCart as Cart } from 'react-icons/fa';
import { AiOutlineArrowUp as Arrow } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: auto;
  padding: 20px 10%;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 1050px) {
    padding: 20px 5%;
  }
`;

export const HeadingContainer = styled.div`
  text-align: left;
  border-bottom: 3px solid ${({ theme }) => theme.green};
`;

export const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.darkGreen};
`;

export const SortingContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;

  div {
    :nth-child(2) {
      img {
        @media (max-width: 500px) {
          width: 35px;
          height: 35px;
        }
        :first-child {
          margin-right: 15px;
          @media (max-width: 500px) {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const SortBy = styled.select`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 2px solid ${({ theme }) => theme.green};
  height: 30px;

  @media (max-width: 500px) {
    font-size: 12px;
    width: 70px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${({ box }) =>
    box &&
    css`
      flex-flow: row wrap;
    `}
`;

export const LineButton = styled.button`
  width: 41px;
  height: 38px;
  background: url(${LineIcon}) no-repeat;
  background-size: cover;
  border: none;

  ${({ active }) =>
    !active &&
    css`
      border: 2px solid ${({ theme }) => theme.green};
    `}
`;

export const BoxButton = styled.button`
  width: 41px;
  height: 38px;
  background: url(${BoxesIcon}) no-repeat;
  background-size: cover;
  margin-right: 10px;
  border: none;

  ${({ active }) =>
    active &&
    css`
      border: 2px solid ${({ theme }) => theme.green};
    `}
`;

export const ScrollContainer = styled.div`
  height: 0;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 90%;
  top: 85%;
  left: 5%;
  opacity: 0;
  transition: 0.2s;

  ${({ appear }) =>
    appear &&
    css`
      opacity: 1;
      display: flex;
    `}

  button {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.green};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 552px) {
      height: 60px;
      width: 60px;
    }
  }
`;

export const HashLinkStyled = styled(Link)`
  text-decoration: none;
`;

export const CartStyled = styled(Cart)`
  height: 70%;
  width: 70%;
  color: white;
  text-decoration: none;
`;

export const ArrowStyled = styled(Arrow)`
  height: 70%;
  width: 70%;
  color: white;
`;

export const BasketCircle = styled.div`
  position: relative;
  text-align: center;
  top: -65px;
  left: 48px;
  background-color: red;
  border-radius: 50px;
  width: 20px;
  color: white;
  font-size: 1.4rem;
  padding: 0.2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};

  @media screen and (max-width: 552px) {
    top: -51px;
    left: 36px;
  }
`;
