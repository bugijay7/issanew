import { useState } from 'react'
import './connect.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
<<<<<<< HEAD
import Projects from '../components/Projects';
=======
>>>>>>> bfbb022f8e3d50be71010851a85c6399ac1149a8
import Services from '../components/Services';

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
