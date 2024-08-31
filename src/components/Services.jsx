import { useState } from 'react';
import './services.css';

function Services() {
  const [count, setCount] = useState(0);

  return (
    <div className='serv-container'>
      <h1>Our Services</h1>

      <section className='service-section'>
        <h2>Photography</h2>
        <div className='service-subsections'>
          <div className='subsection'>
            <h3>Portrait Photography</h3>
            <p>Capturing the essence of individuals with high-quality portraiture.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
          <div className='subsection'>
            <h3>Landscape Photography</h3>
            <p>Capturing breathtaking landscapes and scenic views.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
          <div className='subsection'>
            <h3>Event Photography</h3>
            <p>Documenting events with high-quality photography to capture every moment.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className='service-section'>
        <h2>Videography</h2>
        <div className='service-subsections'>
          <div className='subsection'>
            <h3>Event Videography</h3>
            <p>Filming events with a focus on capturing memorable moments.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
          <div className='subsection'>
            <h3>Corporate Videos</h3>
            <p>Creating professional videos for corporate purposes and branding.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
          <div className='subsection'>
            <h3>Music Videos</h3>
            <p>Producing creative and visually compelling music videos.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className='service-section'>
        <h2>Video Editing</h2>
        <div className='service-subsections'>
          <div className='subsection'>
            <h3>On-demand Editing</h3>
            <p>Enhancing and assembling film footage to create a polished final product.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
         
          <div className='subsection'>
            <h3>Documentary Editing</h3>
            <p>Editing documentaries to present compelling and informative stories.</p>
            <ul className='project-links'>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 1</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 2</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 3</a></li>
              <li><a href='#' target='_blank' rel='noopener noreferrer'>Project 4</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;
