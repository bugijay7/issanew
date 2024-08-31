import { useState } from 'react'
import './banner.css';

function Banner() {
  const [count, setCount] = useState(0)

  return (
      <div className='bann-container'>
      <div className='bann-box'>
      <div className='bann-image'> </div>
      <div className='bann-intro'>
      <h1>Issa - Capturing Moments, Crafting Stories</h1>
      <p className='intro-text'>
          Welcome to Faulupics, 
          where every photograph tells a story. <strong>I'm Issa,</strong> 
          a passionate photographer
           dedicated to capturing the beauty of life's fleeting moments. 
          Whether it's the elegance of a wedding, the energy of sports, 
          or the allure of fashion, my lens turns your memories into timeless art. 
          Explore my portfolio and discover the world through my eyes.
       </p>
     </div>
      </div>

      </div>
    
  )
}

export default Banner
