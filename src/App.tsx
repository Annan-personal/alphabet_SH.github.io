import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import NavPic from './components/NavigationPicture';
import ServicesSection from './components/ServiceSection';
import ServicesSection2 from './components/ServiceSection2';
import ContactSection from './components/ContactSection';
import ServicesPage from './pages/Service';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Services from './pages/Service';
import About from './pages/About';
import ContactPage from './pages/Contact';
import Product1 from './pages/products/Product1'

export const HomePage: React.FC = () => {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <NavPic />
      <div ref={servicesSectionRef}>
        <ServicesSection2 />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <div>
        <NavBar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product1 />} />
          <Route path="/products/product1" element={<Product1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>

        <Footer />
        <ScrollToTopButton />

      </div>
    </Router>
  );
}

export default App;
