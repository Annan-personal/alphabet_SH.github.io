import React from 'react';
import { HoverEffect } from '../components/ui/card-hover-effect'; // Adjust the import path as necessary
import Product1 from '../resources/Product1.jpg';
import Product2 from '../resources/Product2.jpg';
import Product3 from '../resources/Product3.jpg';
import Product4 from '../resources/Product4.jpg';
import Product5 from '../resources/Product5.jpg';
import Product6 from '../resources/Product6.jpg';

const services = [
  {
    title: 'High-Tensile Mesh',
    description: '',
    link: Product1,
  },
  {
    title: 'Patio and Enclosures Mesh',
    description: '',
    link: Product2,
  },
  {
    title: 'Hurricane Protection Screens',
    description: '',
    link: Product3,
  },
  {
    title: 'Fiberglass Visible Mesh',
    description: '',
    link: Product4,
  },
  {
    title: 'Perforated Aluminum Mesh',
    description: '',
    link: Product5,
  },
  {
    title: 'Curtain Wall',
    description: '',
    link: Product6,
  }
];

function ServicesSection() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">OUR PRODUCTS</h2>
      <div className="max-w-7xl mx-auto px-6">
        <HoverEffect items={services} />
      </div>
    </div>
  );
}

export default ServicesSection;
