import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './portfolio.css';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts'; // Ensure Contacts is imported

function Portfolio() {
  const location = useLocation(); // Use useLocation to get location

  // Get query params (for example: ?category=wedding)
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  // Based on category, determine which gallery to show
  let galleryImages;
  if (category === 'wedding') {
    galleryImages = weddingImages; // Ensure this is defined
  } else if (category === 'nature') {
    galleryImages = natureImages; // Ensure this is defined
  } else if (category === 'portrait') {
    galleryImages = productImages; // Ensure this is defined
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
