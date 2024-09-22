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
            <div className='cards'>
              <img className='image' src={weddings} alt="Weddings" />
              <div className='card-info'>
              <h2 className='card-title'>Weddings</h2>
              <p className='cards-text'>
                Capturing the magic of special days with timeless elegance...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio?category=wedding')}>
                SEE MORE
              </button>
              </div>
            </div>

          <div className='cards'>
<<<<<<< HEAD
            <img className='image' src={nature} alt="Nature" />
              <div className='card-info'>
              <h2 className='card-title'>Nature</h2>
              <p className='cards-text'>
                Embrace the beauty of the natural world through our lens...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio?category=nature')}>
                SEE MORE
              </button>
            </div>
          </div>

          <div className='cards'>
            <img className='image' src={portraits} alt="Portraits" />
            <div className='card-info'>
              <h2 className='card-title'>Portraits</h2>
              <p className='cards-text'>
                Bringing out the personality and emotion of every individual...
              </p>
              <button className='page-links' onClick={() => navigate('/portfolio?category=portrait')}>
                SEE MORE
              </button>
            </div>
=======
            <img className='image' src={weddings} alt="Weddings" />
            <h2 className='card-title'>Weddins</h2>
            <p className='cards-text'>
              Capturing the magic of your special day with timeless elegance and heartfelt moments. 
              From candid smiles to the grand celebrations, we focus on preserving the beauty of every detail, ensuring your memories last a lifetime. Let us tell your love story through stunning visuals that you'll cherish forever.
            </p>
            <button className='page-links'>SEE MORE</button>
          </div>

          <div className='cards'>
            <img className='image' src={fashions} alt="Fashion" />
            <h2 className='card-title'>Events</h2>
            <p className='cards-text'>
              Showcasing the beauty of style through creative and sophisticated photography. 
              We bring your fashion vision to life, highlighting the elegance and personality of each piece. Whether it's for a runway, a lookbook, or an editorial spread, our lens captures the essence of fashion in every frame.
            </p>
            <button className='page-links'>SEE MORE</button>
          </div>

          <div className='cards'>
            <img className='image' src={products} alt="Products" />
            <h2 className='card-title'>Nature</h2>
            <p className='cards-text'>
              Highlighting your products with crisp, professional images that captivate and sell. 
              We understand the power of a perfect shot, making sure your products stand out in a competitive market. From lighting to composition, every detail is meticulously crafted to present your products in the best possible light.
            </p>
            <button className='page-links'>SEE MORE</button>
>>>>>>> bfbb022f8e3d50be71010851a85c6399ac1149a8
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
