import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import './portfolio.css';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts'; // Ensure Contacts is imported

function Portfolio() {
  const location = useLocation();
  
  // Get query params (for example: ?category=wedding)
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  // Based on category, determine which gallery to show
  let galleryImages;
  if (category === 'wedding') {
    galleryImages = 'weddingImages'; // Replace this with the actual wedding images array
  } else if (category === 'nature') {
    galleryImages = 'natureImages'; // Replace with the actual nature images array
  } else if (category === 'portrait') {
    galleryImages = 'productImages'; // Replace with the actual product images array
  }

  return (
    <div>
      <Gallery images={galleryImages} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Portfolio;
