import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './containers/About/About';
import Footer from './components/Footer/Footer';
// Import other sections as needed

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      {/* Add other sections here */}
      <Footer />
    </div>
  );
}

export default App;
