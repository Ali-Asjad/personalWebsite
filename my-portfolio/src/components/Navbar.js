import React, { useState } from 'react';
import Logo from './Logo';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // For hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar
  };

  return (
    <div className='navbarContainer'>
      <Logo /> {/* Logo on the left */}

      <div className='navLinks desktop-only'>
        {/* Navigation links for desktop */}
        <a className='navLink' href="#hero">Home</a>
        <a className='navLink' href="#experience">Experience</a>
        <a className='navLink' href="#projects">Projects</a>
        <a className='navLink' href="#contact">Contact</a>
      </div>

      <div className='mobile-menu-icon mobile-only' onClick={toggleSidebar}>
        {/* Hamburger icon for mobile */}
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          {/* Sidebar menu */}
          <a className='navLink' href="#hero" onClick={toggleSidebar}>Home</a>
          <a className='navLink' href="#experience" onClick={toggleSidebar}>Experience</a>
          <a className='navLink' href="#projects" onClick={toggleSidebar}>Projects</a>
          <a className='navLink' href="#contact" onClick={toggleSidebar}>Contact</a>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar} />} {/* Overlay for mobile */}
    </div>
  );
};

export default Navbar;
