import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.green};
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: 1rem;
  border: none;
  transition: 0.2s;

  :hover {
    filter: brightness(90%);
  }
  :active {
    filter: brightness(60%);
  }

  ${({ order }) =>
    order &&
    css`
      width: 220px;
      height: 60px;
      border-radius: 30px;
    `}
`;
