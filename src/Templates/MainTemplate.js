import React from 'react';
import GlobalStyle from 'Themes/GlobalStyle';
import { theme } from 'Themes/MainTheme';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
