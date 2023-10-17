import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './containers/About/About';
import Gallery from './containers/Gallery/Gallery';
import Footer from './components/Footer/Footer';
// Import other sections as needed

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
