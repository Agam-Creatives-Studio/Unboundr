import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Hero/About';
import ControlledCarousel from './components/Hero/Hero';
import Programs from './components/Hero/Programs';
import Contactus from './components/Hero/Contactus';
import Blog from './components/Hero/Blog';
import Unboundr from './components/Hero/Unboundr-X';
import Unboundrpro from './components/Hero/UnboundrPro';
import Unboundrelevate from './components/Hero/Unboundrelevate';
import Unboundrcamp from './components/Hero/Unboundrcamp';
import Whatsapp from './components/Hero/Whatsapp';
import ThankYou from './components/Hero/Components/ThankYou';
import NotFound from './components/Hero/Components/NotFound';

import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <HelmetProvider>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<ControlledCarousel />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Unboundr-X' element={<Unboundr />} />
        <Route path='/Unboundr-Pro' element={<Unboundrpro />} />
        <Route path='/Unboundr-Elevate' element={<Unboundrelevate />} />
        <Route path='/Unboundr-Camp' element={<Unboundrcamp />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Whatsapp />
      <Footer />
    </HelmetProvider>
  );
};

export default App;
