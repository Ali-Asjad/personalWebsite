import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="about" smooth={true} duration={1000}>About</NavLink>
      <NavLink to="experience" smooth={true} duration={1000}>Experience</NavLink>
      <NavLink to="projects" smooth={true} duration={1000}>Projects</NavLink>
      <NavLink to="contact" smooth={true} duration={1000}>Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
