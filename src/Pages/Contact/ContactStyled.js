import styled from 'styled-components';
import Iframe from 'react-iframe';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 5rem 0;
`;

export const ContactContainer = styled.div`
  flex-basis: 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  flex-basis: 50%;
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;

  span {
    margin: 2rem 0;
    :nth-child(3) {
      font-weight: 500;
      color: ${({ theme }) => theme.green};
    }
    :nth-child(4) {
      font-weight: 500;
    }
  }
`;

export const StyledIFrame = styled(Iframe)`
  width: 390px;
  height: 388px;

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
