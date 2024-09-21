import { useState } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import Services from './Services';

function Banner() {
  const [count, setCount] = useState(0);

  return (
    <div className='bann-container'>
               <div className='overlay-text'>
               <h1 className='intro-title'>Welcome to <strong className='strong'> Faulu Pics 
               </strong></h1>
               <Services />
               </div>
    </div>
  );
}

export default Banner;
