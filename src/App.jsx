import React from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// IMPORT THE COMPONENTS

import Navbar from './Navbar'; 
import Hero from './Hero';    
import AdSection from './AdSection';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// --- Main App ---
function App() {
  
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
    });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AdSection />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;