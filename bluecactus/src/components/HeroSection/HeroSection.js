import React from 'react';
import './HeroSection.css';
import hero from './img/hero.png'
// import hero from './img/glasses.JPG'


const HeroSection = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Hero" />
    </div>
  );
};

export default HeroSection;