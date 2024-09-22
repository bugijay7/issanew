import { useState } from 'react';
import './home.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
<<<<<<< HEAD
import Services from '../components/Services';
import Contacts from '../components/Contacts';
=======
import Services from '../components/Services';  // Make sure to import this
import Contacts from '../components/Contacts';  // Make sure to import this

>>>>>>> c386fa1bbb80c889a4173f1f57aa995f6bc6b626
function Home() {
  const [, setCount] = useState(0);

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
  );
}

export default Home;
