import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkContainer, Link } from './NavBarStyled';

const NavBar = () => (
  <>
    <Container>
      <LinkContainer>
        <Link exact as={NavLink} to="/" activeclass="active">
          Home
        </Link>
        <Link as={NavLink} to="/shop" activeclass="active">
          Shop
        </Link>

        <Link as={NavLink} to="/news" activeclass="active">
          News
        </Link>

        <Link as={NavLink} to="/contact" activeclass="active">
          Contact
        </Link>
      </LinkContainer>
    </Container>
  </>
);

export default NavBar;
