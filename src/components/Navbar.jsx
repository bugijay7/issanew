import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  return (
    <div className='nav-container'>
      <div className='navbar-links'>

        <div className='shorts'>
          <p><a href=''>BLOG</a></p>
          <p><a href=''>ABOUT ME</a></p>
          <p><a href=''>CONTACTS</a></p>
        </div>

        <div className='socials'>
          <FaFacebook className='icon'  color="blue" /> 
          <FaInstagram className='icon' color="red" />
          <FaTiktok className='icon'  color="black" />
        </div>

      </div>

      <div className='nav'>
        <h1>Faulu<strong>pics</strong></h1>
        
        <div className='links'>
        <p><Link to='/'>Home</Link></p> 
          <p><Link to='/portfolio'>Gallery</Link></p>
          <p><Link to='/connect'>Portfolio</Link></p>{/* Updated link */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
