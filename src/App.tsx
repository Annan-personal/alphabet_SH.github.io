// HomePage.tsx
import React from 'react';
import NavBar from './components/NavigationBar';
import NavPic from './components/NavigationPicture'
import ServicesSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <NavPic />
      <ServicesSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;