import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 310px;
  width: 70%;
  background-color: ${({ theme }) => theme.green};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  display: flex;
  align-items: center;
  border-radius: 30px;
  margin: 50px auto;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }

  @media screen and (max-width: 740px) {
    width: 85%;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const ContentContainer = styled.div`
  flex-basis: 50%;
  padding: 15px;
  margin: auto;

  @media screen and (max-width: 920px) {
    flex-basis: 60%;
    padding: 0 5px;
  }

  ${({ second }) =>
    second &&
    css`
      margin: 0 20px;
      text-align: center;
    `}
`;

export const Image = styled.div`
  flex-basis: 50%;
  background: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;

  ${({ second }) =>
    second &&
    css`
      flex-basis: 25%;
      border-radius: 0px;

      :first-child {
        max-width: 920px
        border-radius: 0px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
       
      }
      :nth-child(3) {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;

        @media screen and (max-width: 920px) {
        display:none;  
     }
      }
    `}

  @media screen and (max-width: 920px) {
    flex-basis: 40%;
    background-position-x: 90%;
  }
`;
