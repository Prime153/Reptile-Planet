import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';

export const Container = styled.div`
  flex: 1 0 ${({ width }) => width};
  display: grid;
  justify-content: center;
  padding-bottom: 20px;
  text-decoration: none;
  align-items: end;
  transition: 0.2s;
  background: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 684px) {
    flex: 0 0 80%;
    min-height: 40vh;
    margin-bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px;

    :first-child {
      margin-top: 3rem;
      background-position: 90% 20%;
    }

    :nth-child(2) {
      background-position-y: 60%;
    }
  }

  :hover {
    transform: scale(1.03);
  }
`;

export const HeadingStyled = styled(Heading)`
  color: black;
  margin: 0 30px;
`;
