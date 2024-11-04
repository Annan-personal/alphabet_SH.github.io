import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product1 from '../resources/Product1.jpg';
import Product2 from '../resources/Product2.jpg';
import Product3 from '../resources/Product3.jpg';
import Product4 from '../resources/Product4.jpg';
import Product5 from '../resources/Product5.jpg';
import Product6 from '../resources/Product6.jpg';

const services = [
    {
      title: 'High-Tensile High-Quality Mesh',
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

function ServicesSection2() {
    const navigate = useNavigate();
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl text-center font-bold mb-8">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="text-black rounded-md shadow-lg overflow-hidden bg-white"
                    >
                        {/* Image on top */}
                        <img
                            src={service.link}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content below image */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="mb-4">{service.description}</p>
                            <button
                                onClick={() => navigate('/services')} // Navigate to /services on click
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection2;
