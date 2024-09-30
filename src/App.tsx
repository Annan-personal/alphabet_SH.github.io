// HomePage.tsx
import React from 'react';
import NavBar from './components/NavigationBar';
import NavPic from './components/NavigationPicture'
import ServicesSection from './components/ServiceSection';
import ContactSection from './components/ContactSection'

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <NavPic />
      <ServicesSection />
    </div>
  );
};

export default HomePage;