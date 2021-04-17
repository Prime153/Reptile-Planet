import styled from 'styled-components';
import { FaShoppingCart as Cart } from 'react-icons/fa';

export const Container = styled.div`
  width: 350px;
  min-height: 9vh;
  padding: 1rem;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.green};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 0.2fr;
  align-items: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-decoration: none;

  :active {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  @media screen and (max-width: 850px) {
    min-height: 6vh;
    display: none;
  }

  span {
    padding: 0.8rem;
    text-align: center;
    :first-child {
      border-right: 3px solid;
    }
  }
`;

export const ShoopingCart = styled(Cart)`
  height: 100%;
  width: 50%;
  margin: 0 1rem;
`;

export const MobileShoppingCart = styled.div`
  position: absolute;
  right: 5%;
  top: 0%;
  text-align: center;
  color: ${({ theme }) => theme.green};
  display: none;
  width: 60px;
  text-decoration: none;

  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export const MobileBasketCircle = styled.div`
  position: relative;
  text-align: center;
  top: 15px;
  left: 36px;
  background-color: red;
  border-radius: 50px;
  width: 20px;
  color: white;
  font-size: 1.4rem;
  padding: 0.2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
`;
