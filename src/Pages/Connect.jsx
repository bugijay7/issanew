import { useState } from 'react'
import './connect.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Projects from '../components/Projects';

function Connect() {
  const [, setCount] = useState(0)

  return (
      <div className='conn-container'>
      <Navbar />
      <Projects />
      <Services />
      <Footer />
      </div>
    
  )
}

export default Connect
