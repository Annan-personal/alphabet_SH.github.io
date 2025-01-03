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

function ServicesSection2() {
    const navigate = useNavigate();
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl text-center font-bold mb-8">OUR PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="text-black rounded-md shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105"
                        style={{
                            maxWidth: '100%', // Default card size
                            width: '100%', // Ensure full width for each card
                            height: 'auto',
                        }}
                    >
                        {/* Image on top */}
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={service.link}
                                alt={service.title}
                                className="w-full h-40 md:h-48 lg:h-56 object-cover" // Adjust height for large screens
                            />
                        </div>

                        {/* Content below image */}
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-center lg:text-2xl">
                                {service.title}
                            </h3>
                            <p className="mb-4 text-center text-gray-600 lg:text-lg">
                                {service.description}
                            </p>
                            <button
                                onClick={() => navigate('/services')}
                                className="bg-blue-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full hover:bg-blue-600 mx-auto block"
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
