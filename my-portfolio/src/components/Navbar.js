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
        <RiMenu3Line />
      

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          {/* Sidebar menu */}
          <div className='sidebar-header'>
            <RiCloseLine className='closeIcon' onClick={toggleSidebar} />
          </div>
          <a className='navLink' href="#hero">Home</a>
          <a className='navLink' href="#experience">Experience</a>
          <a className='navLink' href="#projects">Projects</a>
          <a className='navLink' href="#contact">Contact</a>
        </div>
      </div>

      {/* {isOpen && <div className="overlay" onClick={toggleSidebar} />}  */}
    </div>
  );
};

export default Navbar;
