import { useState } from 'react'
import './connect.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Services from '../components/Services';

function Connect() {
  const [, setCount] = useState(0)

  return (
      <div className='conn-container'>
      <Navbar />
      <Services />
      <Footer />
      </div>
    
  )
}

export default Connect
