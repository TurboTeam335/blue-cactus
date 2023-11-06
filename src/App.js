import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './containers/About/About';
import Gallery from './containers/Gallery/Gallery';
import Contact from './containers/Contact/Contact';
import Follow from './containers/Follow/Follow';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Element name="top" />
      <Header />
      <HeroSection />
      <Element name="about"><About /></Element>
      <Element name="gallery"><Gallery /></Element>
      <Element name="contact"><Contact /></Element>
      <Element name="follow"><Follow /></Element>
      <Footer />
    </div>
  );
}

export default App;
