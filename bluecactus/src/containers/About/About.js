import React, { useState } from 'react';
import './About.css';
import Page from './components/Page';
import NavArrows from './components/NavArrows'; 
import one from './img/about1.JPG';
import two from './img/about2.jpg';
import three from './img/about3.jpg';
import four from './img/about4.png';

const About = () => {
  const [currentPage, setCurrentPage] = useState(0); 

  const pages = [ 
    {
      imgSrc: one,
      title: 'who we are...',
      paragraph: 'Blue Cactus Horticulture is your partner in sustainable gardening in Seattle. Our small, passionate team is dedicated to enhancing and maintaining your garden’s beauty and health.',
      layoutType: 'layout1'
    },
    {
      imgSrc: two,
      title: 'what we do…',
      paragraph: 'We offer premium gardening services to upscale residential properties, including pruning, edible garden planning, and landscape installations. Our detailed and creative approach caters to your specific garden needs.',
      layoutType: 'layout2'
    },
    {
      imgSrc: three,
      title: 'our approach…',
      paragraph: 'We value relationships with clients and gardens. Our focus is on sustainable practices, ensuring your landscape is eco-friendly and aesthetically pleasing, flourishing throughout the seasons.',
      layoutType: 'layout3'
    },
    {
      imgSrc: four,
      title: 'our passion…',
      paragraph: 'We are devoted gardeners, treating every project with personal care and attention. With Blue Cactus, you’re partnering with enthusiasts dedicated to realizing your garden’s full potential.',
      layoutType: 'layout2'
    },
    
  ];

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length); // Move to the next page
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length); 
  };

  return (
    <div className='about-section'>
      <NavArrows onNext={nextPage} onPrev={prevPage} /> 
      <Page
        imgSrc={pages[currentPage].imgSrc}
        title={pages[currentPage].title}
        paragraph={pages[currentPage].paragraph}
        layoutType={pages[currentPage].layoutType}
      />
    </div>
  );
};

export default About;
