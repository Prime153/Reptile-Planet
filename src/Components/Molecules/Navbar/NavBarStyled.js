import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkGreen};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-weight: 500;
  transition: 0.2s;

  @media screen and (max-width: 850px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 40%;
`;

export const Link = styled.button`
  margin: 0 1rem;
  text-decoration: none;
  color: white;

  :after {
    position: relative;
    top: 8px;
    display: block;
    content: '';
    border-bottom: 3px solid white;
    transform: scaleX(0);
    transition: transform 140ms ease-in;
  }
  :hover:after {
    transform: scaleX(1);
  }

  &.active {
    padding: 5px;
    border-bottom: 3px solid white;
  }
`;
