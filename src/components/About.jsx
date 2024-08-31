import { useState } from 'react';
import './about.css';
import weddings from '../assets/weddings.jpg';
import fashions from '../assets/fashions.jpg';
import products from '../assets/products.jpg';

function About() {
  const [count, setCount] = useState(0);

  return (
    <div className='abt-container'>
      <div className='abt-heading'>WHAT WE DO</div>
      <div>
        <div className='card-box'>
          <div className='cards'>
            <img className='image' src={weddings} alt="Weddings" />
            <h2 className='card-title'>Weddings</h2>
            <p className='cards-text'>
              Capturing the magic of your special day with timeless elegance and heartfelt moments. 
              From candid smiles to the grand celebrations, we focus on preserving the beauty of every detail, ensuring your memories last a lifetime. Let us tell your love story through stunning visuals that you'll cherish forever.
            </p>
            <button className='page-links'>SEE MORE</button>
          </div>

          <div className='cards'>
            <img className='image' src={fashions} alt="Fashion" />
            <h2 className='card-title'>Fashion</h2>
            <p className='cards-text'>
              Showcasing the beauty of style through creative and sophisticated photography. 
              We bring your fashion vision to life, highlighting the elegance and personality of each piece. Whether it's for a runway, a lookbook, or an editorial spread, our lens captures the essence of fashion in every frame.
            </p>
            <button className='page-links'>SEE MORE</button>
          </div>

          <div className='cards'>
            <img className='image' src={products} alt="Products" />
            <h2 className='card-title'>Products</h2>
            <p className='cards-text'>
              Highlighting your products with crisp, professional images that captivate and sell. 
              We understand the power of a perfect shot, making sure your products stand out in a competitive market. From lighting to composition, every detail is meticulously crafted to present your products in the best possible light.
            </p>
            <button className='page-links'>SEE MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
