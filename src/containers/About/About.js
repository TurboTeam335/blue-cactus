import React, { useState } from 'react';
import { Box } from '@mui/material';
import './About.css';
import NavArrows from './components/NavArrows';
import Page from './components/Page';
import AboutPage1 from './components/AboutPage1';
import AboutPage2 from './components/AboutPage2';
import AboutPage3 from './components/AboutPage3';
import AboutPage4 from './components/AboutPage4';

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const pages = [
    { key: 'about1', component: <AboutPage1 /> },
    { key: 'about2', component: <AboutPage2 /> },
    { key: 'about3', component: <AboutPage3 /> },
    { key: 'about4', component: <AboutPage4 /> },
  ];

  const nextPage = () => {
    setSlideDirection('right');
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const prevPage = () => {
    setSlideDirection('left');
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  return (
    <Box sx={{ backgroundColor: '#ecebe8' }}>
      <div className='about-section'>
        <NavArrows onNext={nextPage} onPrev={prevPage} />
        {/* Pass the entire page object to the Page component */}
        <Page page={pages[currentPage]} direction={slideDirection} />
      </div>
    </Box>
  );
};

export default About;