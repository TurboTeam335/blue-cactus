import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './containers/About/About';
import Gallery from './containers/Gallery/Gallery';
import Contact from './containers/Contact/Contact';
import Follow from './containers/Follow/Follow';
import Footer from './components/Footer/Footer';
// Import other sections as needed

function App() {
  return (
    <div className="App">
      <Element name="top" />
      <Header />
      <HeroSection />
      <Element name="about"><div style={{ paddingTop: '98px' }}><About /></div></Element>
      <Element name="gallery"><div style={{ paddingTop: '64px' }}><Gallery /></div></Element>
      <Element name="contact"><div style={{ paddingTop: '58px' }}><Contact /></div></Element>
      <Element name="follow"><div style={{ paddingTop: '98px' }}><Follow /></div></Element>
      <Footer />
    </div>
  );
}

export default App;
