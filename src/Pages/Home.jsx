import { useState } from 'react'
import './home.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
function Home() {
  const [, setCount] = useState(0)

  return (
      <div className='home-container'>
      <Navbar />
      <Banner />
      <Testimonials />
      <Footer />
      </div>
    
  )
}

export default Home
