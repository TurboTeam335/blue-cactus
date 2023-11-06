import React from 'react';
import './HeroSection.css';
import hero from './img/hero.JPG'

const HeroSection = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Hero" />
    </div>
  );
};

export default HeroSection;