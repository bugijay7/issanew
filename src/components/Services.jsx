import React from 'react';
import './services.css';
import { FaCamera, FaVideo, FaEdit } from 'react-icons/fa'; // Importing icons

const Services = () => {
  return (
    <div className="services-container" id='services'>

      {/* Photography Section */}
      <div className="service-section">
        <FaCamera className="service-icon" />
        <h2>Photography</h2>
        <p>
          From weddings to portraits, we capture every moment with creativity and precision.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Videography Section */}
      <div className="service-section">
        <FaVideo className="service-icon" />
        <h2>Videography</h2>
        <p>
          Cinematic experiences for your special occasions, crafted with expertise.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Video Editing Section */}
      <div className="service-section">
        <FaEdit className="service-icon" />
        <h2>Video Editing</h2>
        <p>
          Professional editing to make your videos polished and unforgettable.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Services;
