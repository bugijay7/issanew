import { useState } from 'react';
import './gallery.css';


import nat1 from '../assets/images/nat1.jpg';
import nat2 from '../assets/images/nat2.jpg';
import nat3 from '../assets/images/nat3.jpg';
import nat4 from '../assets/images/nat4.jpg';
import nat5 from '../assets/images/nat5.jpg';
import nat6 from '../assets/images/nat6.jpg';
import nat7 from '../assets/images/nat7.jpg';
import nat8 from '../assets/images/nat8.jpg';

import wed1 from '../assets/images/wed1.jpg';
import wed2 from '../assets/images/wed2.jpg';
import wed3 from '../assets/images/wed3.jpg';
import wed4 from '../assets/images/wed4.jpg';
import wed5 from '../assets/images/wed5.jpg';
import wed6 from '../assets/images/wed6.jpg';
import wed7 from '../assets/images/wed7.jpg';
import wed8 from '../assets/images/wed8.jpg';

import prod1 from '../assets/images/prod1.jpg';
import prod2 from '../assets/images/prod2.jpg';
import prod3 from '../assets/images/prod3.jpg';
import prod4 from '../assets/images/prod4.jpg';
import prod5 from '../assets/images/prod5.jpg';
import prod6 from '../assets/images/prod6.jpg';
import prod7 from '../assets/images/prod7.jpg';
import prod8 from '../assets/images/prod8.jpg';
import Navbar from './Navbar';


function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const natureImages = [nat1, nat2, nat3, nat4, nat5, nat6, nat7, nat8];
  const weddingImages = [wed1, wed2, wed3, wed4, wed5, wed6, wed7, wed8];
  const productImages = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className='cont-container'>
    <Navbar />
      <div className='album'>
        <h2>Nature Photography</h2>
        <div className='gallery-grid'>
          {natureImages.map((img, index) => (
            <div key={index} className='gallery-item'>
              <img
                src={img}
                alt={`Nature Image ${index + 1}`}
                className='gallery-img'
                onClick={() => openLightbox(img)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className='album'>
        <h2>Wedding Photography</h2>
        <div className='gallery-grid'>
          {weddingImages.map((img, index) => (
            <div key={index} className='gallery-item'>
              <img
                src={img}
                alt={`Wedding Image ${index + 1}`}
                className='gallery-img'
                onClick={() => openLightbox(img)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className='album'>
        <h2>Product Photography</h2>
        <div className='gallery-grid'>
          {productImages.map((img, index) => (
            <div key={index} className='gallery-item'>
              <img
                src={img}
                alt={`Product Image ${index + 1}`}
                className='gallery-img'
                onClick={() => openLightbox(img)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className='lightbox' onClick={closeLightbox}>
          <img src={currentImage} alt="Enlarged view" className='lightbox-img' />
        </div>
      )}
    </div>
  );
}

export default Gallery;
