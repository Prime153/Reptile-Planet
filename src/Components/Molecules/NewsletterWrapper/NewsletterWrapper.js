import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  StyledInput,
  StyledButton,
  ErrorText,
  StyledHeading,
} from './NewsletterWrapperStyled';

const NewsletterWrapper = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email adress'),
  });

  return (
    <Container>
      <StyledHeading>Sign up for our newsletter!</StyledHeading>
      <Formik
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <ErrorText>
                {errors.email && touched.email && errors.email}
              </ErrorText>
              <StyledInput name="email" placeholder="email..." />
              <StyledButton type="submit">Sign Up!</StyledButton>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default NewsletterWrapper;
