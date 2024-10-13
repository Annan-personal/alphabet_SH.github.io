import React from 'react';
import { HoverEffect } from '../components/ui/card-hover-effect'; // Adjust the import path as necessary

const services = [
  {
    title: 'PVDF powder coated aluminum plate',
    description:
      'Alphabet owns manufacturing base in China AkzoNobel certified coating base...',
    link: `${process.env.PUBLIC_URL}/Section1.jpg`,
  },
  {
    title: 'SS mesh wire',
    description:
      'Our stainless-steel mesh wire recognized in Australia and Canada market...',
    link: `${process.env.PUBLIC_URL}/Section2.jpg`,
  },
  {
    title: 'Extrusion aluminum material',
    description:
      'The simplicity of operation is the core of a carefully planned design...',
    link: `${process.env.PUBLIC_URL}/Section3.jpg`,
  },
];

function ServicesSection() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">OUR SERVICES</h2>
      <div className="max-w-7xl mx-auto px-6">
        <HoverEffect items={services} />
      </div>
    </div>
  );
}

export default ServicesSection;
