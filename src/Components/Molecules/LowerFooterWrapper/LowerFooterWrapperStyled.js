import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  min-height: 5vh;
  display: flex;
  justify-content: space-evenly;
  background-color: #2d2d2d;
  color: ${({ theme }) => theme.footer.Lower};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.Roboto};
  align-items: center;
`;
