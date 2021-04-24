import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  margin: 10rem 0;

  @media (max-width: 1100px) {
    justify-content: center;
    text-align: center;
  }

  ${({ order }) =>
    !order &&
    css`
      justify-content: flex-start;
    `}
`;
export const AreaContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ order }) =>
    order &&
    css`
      justify-content: flex-start;
    `}

  @media (max-width: 1100px) {
    justify-content: center;
    width: 90%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  width: 70%;
  border-bottom: 3px solid ${({ theme }) => theme.green};
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 2000px) {
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const Image = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  flex-flow: 100%;
  min-height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const DateText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 0.5rem 1rem;
`;

export const HeadingText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 1rem 1rem;
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 2rem 1rem;
`;
