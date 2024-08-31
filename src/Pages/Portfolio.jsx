import { useState } from 'react'
import './portfolio.css';
import Gallery from '../components/Gallery';
import Footer from '../components/footer';

function Portfolio() {
  const [, setCount] = useState(0)

  return (
      <div className='port-container'>
      <Gallery />
      <Footer />
      </div>
    
  )
}

export default Portfolio
