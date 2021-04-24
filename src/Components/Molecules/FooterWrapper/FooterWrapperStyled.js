import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #222222;
  width: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 10px;
`;

export const InfoContainer = styled.div`
  flex-basis: 60%;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;

  @media screen and (max-width: 1213px) {
    text-align: center;
    flex-basis: 100%;
  }
`;

export const PhoneNumbersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const PhoneNumberText = styled.span`
  flex-basis: 48%;
  color: ${({ theme }) => theme.green};
  font-family: ${({ theme }) => theme.fontFamily.Architects};
  font-size: ${({ theme }) => theme.fontSize.l};

  @media screen and (max-width: 470px) {
    flex-basis: 100%;
  }
`;

export const LowerPhoneNumberText = styled.div`
  color: ${({ theme }) => theme.footer.Upper};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (max-width: 850px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const LogoContainer = styled.div`
  flex-basis: 24%;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
