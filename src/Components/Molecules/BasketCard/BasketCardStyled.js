import styled from 'styled-components';
import { AiOutlineClose as Remove } from 'react-icons/ai';
import { BiMinus as Minus, BiPlus as Plus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 160px;
  width: 80%;
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.03fr;
  text-align: center;
  align-items: center;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};

  span {
    margin: 0 7px;
    :nth-child(2) {
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    height: 120px;
  }

  @media screen and (max-width: 912px) {
    grid-template-columns: 0.3fr 0.75fr 0.01fr;
    height: 150px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;
    height: 100px;
    width: 90%;
  }
  @media screen and (max-width: 560px) {
    font-size: 12px;
    height: 90px;
    width: 100%;
  }
`;

export const GlobalInfoContainer = styled.div`
  align-items: center;
  height: 80%;

  display: flex;

  @media screen and (max-width: 912px) {
    flex-flow: column nowrap;
  }
`;

export const SpeciesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 40%;
`;

export const ProductInoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 60%;

  span {
    flex-basis: 33.3%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
`;

export const RemoveIcon = styled(Remove)`
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50px;

  :active {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const PlusIcon = styled(Plus)`
  cursor: pointer;
  border-radius: 50px;
  margin: 0 20px;

  :active {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const MinusIcon = styled(Minus)`
  cursor: pointer;
  margin: 0 20px;
  border-radius: 50px;

  :active {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;
