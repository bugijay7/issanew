import { useState } from 'react';
import './testimonials.css';
import prod1 from '../assets/images/prod3.jpg'; 

function Testimonials() {
  const [count, setCount] = useState(0);

  return (
    <div className='test-container'>
      
        <div className="founder-intro">
        <h2>Meet Issa</h2>
        <p>
          Issa is the founder of FauluPics, a renowned cinematographer and photographer with over 10 years of experience.
          His unique eye for detail and passion for storytelling have made him a favorite among clients. From breathtaking
          nature photography to capturing unforgettable wedding moments, Issa’s work speaks for itself.
        </p>
        <p>
          Whether its through the lens of his camera or the creativity in his editing suite, Issa has a talent for turning
          ordinary moments into extraordinary memories.
        </p>
      </div>
      
      <div className="founder-image">
        <img src={prod1} alt="Issa, founder of FauluPics" className='issa-img' />
      </div>
    </div>
  );
}

export default Testimonials;
