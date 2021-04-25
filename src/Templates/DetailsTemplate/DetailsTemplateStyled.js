import styled, { css } from 'styled-components';
import { BiArrowBack as BackButtonIcon } from 'react-icons/bi';

export const Container = styled.div`
  padding: 70px 0;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  color: ${({ theme }) => theme.green};
  font-weight: 500;
`;

export const MainBoardContainer = styled.div`
  margin-bottom: 60px;
  display: flex;

  flex-flow: row nowrap;
  justify-content: center;

  @media (min-width: 2000px) {
    margin: auto;
    width: 70%;
  }

  @media (max-width: 836px) {
    flex-flow: row wrap;
  }
`;

export const Image = styled.img`
  width: 30%;

  @media (max-width: 836px) {
    flex-basis: 60%;
    border-radius: 20px;
  }

  @media (max-width: 470px) {
    flex-basis: 80%;
  }
`;

export const ProductInfoContainer = styled.div`
  display: grid;
  padding-left: 50px;
  grid-template-rows: 0.9fr 0.1fr;
  flex-basis: 45%;

  div {
    :first-child {
      display: flex;
      flex-flow: column nowrap;
    }

    :nth-child(2) {
      font-size: 20px;
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;

      @media (max-width: 836px) {
        justify-content: center;
      }
    }
  }

  @media (max-width: 836px) {
    padding: 30px 0 0 0;
    text-align: center;
    flex-basis: 80%;
  }
`;

export const Species = styled.span`
  font-size: 43px;

  @media (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Text = styled.span`
  margin: 8px 0;
  font-size: 29px;

  :nth-child(3) {
    color: ${({ theme }) => theme.darkGreen};
  }

  @media (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const SpecificationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const CareHeadingsContainer = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  span {
  }
`;

export const CareHeadings = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: white;
  border: none;
  text-align: center;
  margin: 10px;
  outline: none;

  :after {
    position: relative;
    top: 4px;
    display: block;
    content: '';
    border-bottom: 3px solid ${({ theme }) => theme.green};
    transform: scaleX(0);
    transition: transform 170ms ease-in;
  }
  :hover:after {
    transform: scaleX(1);
  }

  @media (max-width: 426px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 10px 10px;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 3px solid ${({ theme }) => theme.green};
    `}
`;

export const DescriptionsContainer = styled.div`
  padding-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  width: 60%;
  margin: auto;

  @media (max-width: 814px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 80%;
  }
  @media (max-width: 426px) {
    font-size: 15px;
    width: 85%;
  }
`;

export const BackButton = styled(BackButtonIcon)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 5%;
  top: 340px;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    top: 280px;
  }
`;
