// src/components/Common/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 1rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>Eraah AI</div>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* Add more links */}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;