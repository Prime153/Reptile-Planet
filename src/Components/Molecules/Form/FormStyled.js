import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.fieldset`
  width: 700px;
  height: auto;
  border-radius: 20px;
  padding: 1rem 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.green};
  margin: 3rem;
  color: ${({ theme }) => theme.green};
  @media screen and (max-width: 690px) {
    width: 400px;
  }
`;

export const ShorterInputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex-basis: 47%;
  }
`;
export const InputContainer = styled.div`
  margin: 1.5rem 0;
`;

export const InputStyled = styled(Field)`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (max-width: 690px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const ValidationText = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: red;

  @media screen and (max-width: 690px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
