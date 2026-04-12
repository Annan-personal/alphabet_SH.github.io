import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/HomePage';
import Services from './pages/ServicesPage';
import About from './pages/About';
import ContactPage from './pages/Contact';
import Product1 from './pages/products/Product1';
import Product2 from './pages/products/Product2';
import Product3 from './pages/products/Product3';
import Product4 from './pages/products/Product4';
import Product5 from './pages/products/Product5';
import Product6 from './pages/products/Product6';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
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
