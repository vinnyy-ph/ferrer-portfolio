import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/works" onClick={() => setIsMenuOpen(false)}>
                Works
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Hire Me Button */}
        <a
          onClick={() => (window.location.href = 'mailto:vnferrer.work@gmail.com')}
          className="navbar-hireme"
        >
          Hire Me <span className="icon"><FaHandshakeSimple /></span>
        </a>

        {/* Hamburger Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
