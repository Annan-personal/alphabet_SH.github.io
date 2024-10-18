import React from 'react';
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
          <Route path="/services" element={<ServicesPage />} />
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
