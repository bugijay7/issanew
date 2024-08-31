import { useState } from 'react';
import './footer.css';

function Footer() {
  const [, setCount] = useState(0);

  return (
    <div className='foot-container'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h2 className='ad'>About Faulupics</h2>
          <p>
            FauluPics is a professional photography firm specializing in portrait and landscape photography. 
            With over 10 years of experience, John captures the essence of every moment through his lens.
          </p>
        </div>
        <div className='touch'>
        <div className='footer-section'>
          <h2>Find Me</h2>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className='footer-section'>
          <h2>Follow-Me</h2>
          <ul className='social-links'>
            <li><a href='https://www.instagram.com/johndoe' target='_blank' rel='noopener noreferrer'>Instagram
         </a>
            </li>
            <li>
              <a href='https://www.facebook.com/johndoe' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com/johndoe' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        
        <div className='footer-section'>
          <h2>Location</h2>
          <p>123 Photography Lane</p>
          <p>City, State, ZIP</p>
        </div>
        </div>
        <div className='footer-section'>
          <h2>Newsletter</h2>
          <p>Subscribe to my monthly digital magazine to stay updated on my latest work and exclusive offers.</p>
          <form>
            <input type='email' placeholder='Your email' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
