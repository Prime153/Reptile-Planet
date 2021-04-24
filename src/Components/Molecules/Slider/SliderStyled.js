import styled from 'styled-components';

export const Container = styled.div`
  height: 71.1vh;
  width: 100%;
`;

export const Image = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 71.1vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

export const SliderStyled = styled.div`
  z-index: 1;
  height: 15px;
  width: 15px;
  border-radius: 50px;

  margin: 0 3px;
  position: relative;
  right: 20px;
  bottom: 50px;
  background-color: ${({ theme }) => theme.darkGreen};

  :hover {
    background-color: ${({ theme }) => theme.green};
  }

  &.active {
    background-color: ${({ theme }) => theme.green};
  }
`;
