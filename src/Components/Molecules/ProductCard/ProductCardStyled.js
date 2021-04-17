import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  margin: 3rem 40rem;
  width: 60vw;
  height: 250px;
  display: flex;
  flex-flow: row nowrap;
  color: ${({ theme }) => theme.darkGreen};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px;
  transition: 0.2s;
  border-radius: 30px;
  text-decoration: none;

  :hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }

  @media screen and (min-width: 2000px) {
    width: 50vw;
  }

  @media screen and (max-width: 1300px) {
    height: 190px;
  }
  @media screen and (max-width: 900px) {
    height: 150px;
  }

  @media screen and (max-width: 774px) {
    height: 130px;
    width: 70vw;
  }
  @media screen and (max-width: 594px) {
    height: 100px;
    width: 90vw;
  }
`;

export const Image = styled.img`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 20vw;
  height: 250px;

  @media screen and (max-width: 1300px) {
    height: 190px;
  }
  @media screen and (max-width: 900px) {
    height: 150px;
  }
  @media screen and (max-width: 774px) {
    height: 130px;
  }
  @media screen and (max-width: 594px) {
    height: 100px;
    width: 30vw;
  }
`;

export const SpeciesContainer = styled.div`
  padding: 2rem;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;

  div {
    :first-child {
      display: flex;
      flex-flow: column nowrap;
      height: 88%;
    }
    :nth-child(2) {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const Species = styled.span`
  font-size: 4rem;

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (max-width: 774px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Text = styled.span`
  font-size: 2.7rem;

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media screen and (max-width: 774px) {
    font-size: 1.4rem;
  }
`;

// Box Model

export const BoxContainer = styled.div`
  text-decoration: none;
  flex-flow: column nowrap;
  width: 20vw;
  height: 500px;
  display: flex;
  text-align: center;
  margin: 5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px;
  color: ${({ theme }) => theme.darkGreen};
  transition: 0.2s;
  border-radius: 30px;

  ${({ home }) =>
    home &&
    css`
      margin: 1rem;
      width: 260px;
      height: 400px;
    `}

  :hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }

  @media screen and (min-width: 2000px) {
    width: 320px;
  }

  @media screen and (max-width: 910px) {
    width: 300px;
  }

  @media screen and (max-width: 420px) {
    width: 230px;
    height: 340px;
  }
`;

export const BoxImage = styled(Image)`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  width: 100%;
  height: 200px;
  border-radius: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media screen and (max-width: 420px) {
    height: 160px;
  }
`;

export const BoxSpeciesContainer = styled(SpeciesContainer)`
  display: grid;
  grid-template-rows: 0.2fr 0.2fr 1fr;
  align-items: end;
`;

export const BoxSpecies = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};

  ${({ home }) =>
    home &&
    css`
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

  @media screen and (max-width: 420px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const BoxText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};

  ${({ home }) =>
    home &&
    css`
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}

  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
`;
