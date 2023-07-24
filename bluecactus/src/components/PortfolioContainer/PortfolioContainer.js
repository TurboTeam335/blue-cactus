import React, { useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import About from "../../containers/About/About";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");


  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <HeroSection />
      <About />
    </div>
  )
}