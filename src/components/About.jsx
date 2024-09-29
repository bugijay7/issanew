import { useNavigate } from 'react-router-dom';
import './about.css';
import weddings from '../assets/images/wed4.jpg';
import portraits from '../assets/images/prod4.jpg';
import nature from '../assets/images/nat5.jpg';

function About() {
  const navigate = useNavigate();

  return (
    <div className='abt-container' id='about'>
      <div className='abt-heading'>OUR SPECIALITY</div>
      <div>
        <div className='card-box'>

          {/* Weddings Card */}
          <div className='cards'>
            <img className='image' src={weddings} alt="Weddings" />
            <div className='card-info'>
              <h2 className='card-title'>Weddings</h2>
              <p className='cards-text'>
                Capturing the magic of special days with timeless elegance...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio')}>
                SEE MORE
              </button>
            </div>
          </div>

          {/* Nature Card */}
          <div className='cards'>
            <img className='image' src={nature} alt="Nature" />
            <div className='card-info'>
              <h2 className='card-title'>Nature</h2>
              <p className='cards-text'>
                Embrace the beauty of the natural world through our lens...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio')}>
                SEE MORE
              </button>
            </div>
          </div>

          {/* Portraits Card */}
          <div className='cards'>
            <img className='image' src={portraits} alt="Portraits" />
            <div className='card-info'>
              <h2 className='card-title'>Portraits</h2>
              <p className='cards-text'>
                Bringing out the personality and emotion of every individual...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio')}>
                SEE MORE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
