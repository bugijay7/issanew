import { useState } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

function Banner() {
  const [count, setCount] = useState(0);

  return (
    <div className="bann-container">
      <div className="overlay-text">
        <h1 className="intro-title">
          Welcome to <strong className="strong">Faulu Pics</strong>
        </h1>
        <p className="intro-description">
          Bringing your memories to life through stunning photography.
           We capture the moments that mean the most to you, whether it's a wedding,
            family portrait, or special event.
        </p>
        <Link to="/portfolio" className="cta-button">
          Explore Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Banner;
