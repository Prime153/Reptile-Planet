/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from 'Components/Atoms/Button/Button';
import { clearBasket as clearBasketAction } from 'Actions/index';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  InputStyled,
  InputContainer,
  ShorterInputContainer,
  ValidationText,
  ButtonContainer,
} from './FormStyled';

const Form = ({ basket, total }) => {
  const dispatch = useDispatch();
  const clearBasket = () => dispatch(clearBasketAction());

  const phoneRegExp = /^\+48\d{9}$/;
  const zipRegExp = /^[0-9]{2}-[0-9]{3}/;

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    last: yup.string().required('Required'),
    adress: yup.string().required('Required'),
    city: yup.string().required('Required'),
    email: yup
      .string()
      .required('Required')
      .email('Invalid email adress')
      .required('Required'),
    phone: yup
      .string()
      .required('Required')
      .matches(
        phoneRegExp,
        'Phone number is not valid (np. +48321456789)',
      ),
    zip: yup
      .string()
      .required('Required')
      .matches(zipRegExp, 'Zip Code is not valid (np. 99-999)'),
  });

  return (
    <Container>
      <legend>Fill in the form</legend>
      <Formik
        initialValues={{
          name: '',
          last: '',
          email: '',
          phone: '+48',
          adress: '',
          city: '',
          zip: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert([
              basket.map((elem) => elem.species),
              `${total}.00 PLN`,
              JSON.stringify(values, null, 2),
            ]);

            clearBasket();

            setSubmitting(false);
          }, 1500);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <ShorterInputContainer>
              <InputContainer>
                <label>
                  First Name:
                  <InputStyled name="name" placeholder="name..." />
                </label>
                <ValidationText>
                  {errors.name && touched.name && errors.name}
                </ValidationText>
              </InputContainer>

              <InputContainer>
                <label>
                  Last Name:
                  <InputStyled
                    name="last"
                    placeholder="last name..."
                  />
                </label>
                <ValidationText>
                  {errors.last && touched.last && errors.last}
                </ValidationText>
              </InputContainer>
            </ShorterInputContainer>

            <InputContainer>
              <label>
                Email:
                <InputStyled name="email" placeholder="email..." />
              </label>
              <ValidationText>
                {errors.email && touched.email && errors.email}
              </ValidationText>
            </InputContainer>

            <InputContainer>
              <label>
                Phone Number:
                <InputStyled
                  name="phone"
                  placeholder="phone number..."
                />
              </label>
              <ValidationText>
                {errors.phone && touched.phone && errors.phone}
              </ValidationText>
            </InputContainer>

            <InputContainer>
              <label>
                Adress Line:
                <InputStyled name="adress" placeholder="adress..." />
              </label>
              <ValidationText>
                {errors.adress && touched.adress && errors.adress}
              </ValidationText>
            </InputContainer>

            <ShorterInputContainer>
              <InputContainer>
                <label>
                  City:
                  <InputStyled name="city" placeholder="city..." />
                </label>
                <ValidationText>
                  {errors.city && touched.city && errors.city}
                </ValidationText>
              </InputContainer>
              <InputContainer>
                <label>
                  Zip Code:
                  <InputStyled name="zip" placeholder="zip code..." />
                </label>
                <ValidationText>
                  {errors.zip && touched.zip && errors.zip}
                </ValidationText>
              </InputContainer>
            </ShorterInputContainer>
            <ButtonContainer>
              <Button order type="submit">
                {isSubmitting ? 'Loading...' : 'Submit order'}
              </Button>
            </ButtonContainer>
          </form>
        )}
      </Formik>
    </Container>
  );
};

Form.propTypes = {
  basket: PropTypes.instanceOf(Array).isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = ({ basket, total }) => ({ basket, total });
export default connect(mapStateToProps)(Form);
