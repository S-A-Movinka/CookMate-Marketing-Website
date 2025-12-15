import React from 'react';
import './App.css'; // To link styles

// --- 2. Hero Component (Home) ---
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>AI Powered<br /> <span className="highlight">Cooking Assistant</span></h1>
        <p>
          Unlock smart recipe ideas based on what’s already in your kitchen.
            CookMate guides you through every step with ease and confidence.

        </p>
        <div className="hero-buttons">
          <button className="btn primary">Get App</button> 
        </div>
        
      </div>
    </section>
  );
};

export default Hero;