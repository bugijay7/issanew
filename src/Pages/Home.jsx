import { useState } from 'react'
import './home.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/footer';
function Home() {
  const [, setCount] = useState(0)

  return (
      <div className='home-container'>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
      </div>
    
  )
}

export default Home
