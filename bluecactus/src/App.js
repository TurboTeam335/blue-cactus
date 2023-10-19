import React from 'react';
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
      <Header />
      <HeroSection />
      <About />
      <Gallery />
      <Contact />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
