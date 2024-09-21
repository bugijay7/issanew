import React from 'react';
import './projects.css'; // Ensure this file is updated with the new styles

// Import images directly
import portraitImage from '../assets/images/portrait.jpg';
import foodImage from '../assets/images/food.jpg';
import reflectionsImage from '../assets/images/reflections.jpg';
import urbanImage from '../assets/images/urban.jpg';

const Projects = () => {
  // Array of photography projects
  const projects = [
    {
      title: 'Portrait Series',
      photographer: 'Issa Faulu',
      coverImage: portraitImage,
      description: 'A captivating series of portraits showcasing emotions, culture, and human diversity.',
    },
    {
      title: 'Food Photography',
      photographer: 'Issa Faulu',
      coverImage: foodImage,
      description: 'Delicious and aesthetically pleasing food photography capturing culinary art.',
    },
    {
      title: 'Reflections',
      photographer: 'Issa Faulu',
      coverImage: reflectionsImage,
      description: 'A creative exploration of reflective surfaces, blending reality and reflection.',
    },
    {
      title: 'Urban Exploration',
      photographer: 'Issa Faulu',
      coverImage: urbanImage,
      description: 'A dynamic series capturing the essence of city life and urban landscapes.',
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        
        <div key={index} className="project">
          <div className="project-text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className='photoman'><strong>Photographer:</strong> {project.photographer}</p>
            <button className="see-full-project-button">See Full Project</button>
          </div>

          <div className="project-image">
            <img src={project.coverImage} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
