import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';  // Import the Logo component

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #007BFF;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />  {/* Use the Logo component */}
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        {/* <NavLink href="#projects">Projects</NavLink> */}
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
