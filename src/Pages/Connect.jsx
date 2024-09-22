import { useState } from 'react'
import './connect.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
<<<<<<< HEAD
import Projects from '../components/Projects';
=======
>>>>>>> c386fa1bbb80c889a4173f1f57aa995f6bc6b626
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
