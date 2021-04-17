import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';
import { HiShoppingCart as ShoopingCart } from 'react-icons/hi';

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

  @media (max-width: 744px) {
    font-size: 15px;
    padding: 20px 5%;
  }
  @media (max-width: 488px) {
    font-size: 12px;
  }
`;

export const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.darkGreen};
`;

export const OrderContainer = styled.div`
  border-top: 4px solid ${({ theme }) => theme.green};
  border-bottom: 4px solid ${({ theme }) => theme.green};
  padding: 20px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyCartContainer = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasketCase = styled(ShoopingCart)`
  color: #e4e4e4;
  width: 200px;
  height: 200px;
`;

export const TotalContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.green};
  width: 91%;
  justify-content: flex-end;
  display: flex;
  padding-top: 10px;

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  div {
    padding: 0 1%;

    :nth-child(2) {
      display: grid;
      span {
        font-size: ${({ theme }) => theme.fontSize.xxs};
        @media screen and (max-width: 690px) {
          font-size: 11px;
        }
      }
    }
  }
`;
