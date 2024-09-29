// HomePage.tsx
import React from 'react';
import NavBar from './components/NavigationBar';
import ContactSection from './components/ContactSection'

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
      className="h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/HomePagePic.jpg')" }}
    >
      </div>
    </div>
  );
};

export default HomePage;