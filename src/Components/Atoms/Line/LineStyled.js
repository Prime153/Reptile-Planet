import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineStyle = styled.hr`
  width: 40%;
  border: 3px solid ${({ theme }) => theme.green};
`;
