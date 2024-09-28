import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 2rem 4rem;
  background-color: rgba(40, 41, 63, 1);
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
  color: rgba(250, 250, 250, 1);
  font-size: 1rem;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  &:hover {
    color: rgba(254, 111, 90, 1);
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
