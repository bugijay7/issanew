import { useState } from 'react'
import './home.css';

import Navbar  from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/footer';
function Home() {
  const [, setCount] = useState(0)

  return (
      <div className='home-container'>
      <Navbar />
      <Banner />
      <About />
      <Footer />
      </div>
    
  )
}

export default Home
