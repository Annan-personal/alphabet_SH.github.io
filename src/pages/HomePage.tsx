import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Alphabet_SH - Architectural Screen Products</title>
        <meta
          name="description"
          content="Alphabet_SH designs and manufactures premium architectural screen and mesh products — high-tensile, patio enclosures, hurricane protection, fiberglass, and more."
        />
      </Helmet>
      <main>
        <HeroSection />
        <ProductsGrid />
        <CertificationsSection />
        <WhyAlphabet />
      </main>
    </>
  );
}

export default Home;
