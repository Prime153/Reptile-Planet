import styled from 'styled-components';
import { RiTruckFill as Truck } from 'react-icons/ri';
import { GiMoneyStack as Money } from 'react-icons/gi';
import { AiOutlineCheckCircle as Check } from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  background-color: ${({ theme }) => theme.green};
`;

export const TextContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 1.5rem 1rem;
  color: white;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
  transition: 0.2s;

  :hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media screen and (max-width: 402px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    margin: 1rem;
  }
`;

export const TruckStyled = styled(Truck)`
  margin-right: 1rem;
  width: 3vw;
  height: auto;
`;
export const MoneyStyled = styled(Money)`
  margin-right: 1rem;
  width: 3vw;
  height: auto;
`;
export const CheckStyled = styled(Check)`
  margin-right: 1rem;
  width: 3vw;
  height: auto;
`;
