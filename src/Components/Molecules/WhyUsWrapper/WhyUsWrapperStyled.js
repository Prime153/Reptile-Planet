import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';
import { GoLightBulb as Bulb } from 'react-icons/go';
import { BiMessageDetail as Message } from 'react-icons/bi';
import { RiShoppingCartLine as Cart } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 2rem 0;
`;

export const HeadingContainer = styled.div`
  width: 80%;
  text-align: center;
  padding: 1rem 2rem;

  @media screen and (max-width: 1008px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 1400px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 1008px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  flex: 2 0 33%;
  display: grid;
  text-align: center;
  justify-items: center;
  padding: 2rem 3rem;
  transition: 0.2s;

  :hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 568px) {
    flex-basis: 100%;
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.green};
`;

export const CardHeadings = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.darkGreen};
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const IconBulb = styled(Bulb)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.darkGreen};
  margin: 1rem;
`;

export const IconMessage = styled(Message)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.darkGreen};
  margin: 1rem;
`;

export const IconCart = styled(Cart)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.darkGreen};
  margin: 1rem;
`;
