import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import NavPic from './components/NavigationPicture';
import ServicesSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Services from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavPic />
      <ServicesSection />
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
        <ScrollToTopButton />

      </div>
    </Router>
  );
}

export default App;
