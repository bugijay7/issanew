import { useState } from 'react';
import './contacts.css';
import { FaFacebook, FaInstagram, FaTiktok, FaReddit, FaPinterest } from 'react-icons/fa';

function Contacts() {
  const [, setCount] = useState(0);

  return (
    <div className='contact-container'>
      <div className='navbar-links'>
        <div className='shorts'>
          <p><a href='#'>PROJECTS</a></p>
          <p><a href='#about'>ABOUT ME</a></p>
          <p><a href='#'>CONTACTS</a></p>
        </div>

        <div className='socials'>
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaTiktok className='icon' />
          <FaReddit className='icon' />
          <FaPinterest className='icon' />
        </div>  
      </div>
    </div>
  );
}

export default Contacts;
