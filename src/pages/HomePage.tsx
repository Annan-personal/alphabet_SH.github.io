import React, { useEffect } from "react";
import ProductsGrid from "../components/ProductsGrid";
import WhyAlphabet from "../components/WhyAlphabet";
import CertificationsSection from "../components/CertificationsSection";
import HeroSection from "../components/HeroSection";

function Home() {
  useEffect(() => {
    // Scroll to the top when the page is visited
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <ProductsGrid />
      <CertificationsSection />
      <WhyAlphabet />
    </div>
  );
}

export default Home;
