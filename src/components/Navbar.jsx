import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

import Contacts from '../components/Contacts';
import mainLogo from '../assets/images/mainlogo.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-container">
      <div className="nav">
        

          <div className={`links ${showMenu ? 'mobile-menu' : ''}`}>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/portfolio">Gallery</Link></p>
          <p><Link to="/connect">Connect</Link></p>
          </div>
          <img src={mainLogo} alt="Faulupics Logo" className="main-logo" />
          <div className='contacts-box'>
          <Contacts />
          </div>

        {/* CTA button */}
        <Link to="/contact" className="cta-button">Book a Session</Link>

        {/* Social Media Links */}
        <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram size={24} /> </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF size={24} /> </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter size={24} /> </a>
        </div>

        {/* Hamburger Menu for Mobile */}
          <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
           </div>
      </div>
    </div>
  );
}

export default Navbar;
