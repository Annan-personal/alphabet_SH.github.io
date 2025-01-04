import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import NavPic from './components/NavigationPicture';
import ServicesSection from './components/ServiceSection';
import ServicesSection2 from './components/ServiceSection2';
import ContactSection from './components/ContactSection';
import Home from './pages/HomePage';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Services from './pages/Service';
import About from './pages/About';
import ContactPage from './pages/Contact';
import Product1 from './pages/products/Product1'
import Product2 from './pages/products/Product2'
import Product3 from './pages/products/Product3'
import Product4 from './pages/products/Product4'
import Product5 from './pages/products/Product5'
import Product6 from './pages/products/Product6'

export const HomePage: React.FC = () => {
  return (
    <div>
      <Home />
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
          <Route path="/products/product2" element={<Product2 />} />
          <Route path="/products/product3" element={<Product3 />} />
          <Route path="/products/product4" element={<Product4 />} />
          <Route path="/products/product5" element={<Product5 />} />
          <Route path="/products/product6" element={<Product6 />} />
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
