import React from 'react';

const ContactSection = () => {
  return (
    <div className="h-[600px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Services</h1>
        <p className="text-lg">Providing top-notch logistics solutions for your business.</p>
      </div>
    </div>
  );
};

export default ContactSection;