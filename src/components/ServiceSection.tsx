import React from 'react';

const services = [
    {
        title: 'PVDF powder coated aluminum plate',
        description: 'Alphabet owns manufacturing base in China AkzoNobel certified coating base, 10+, 20+, 30+ years commitment the Asia biggest CANAS laboratory supporting long-term strategic partnership with China top 5 aluminum sheet manufacturing enterprises',
        bgImage: `${process.env.PUBLIC_URL}/Section1.jpg`,
    },
    {
        title: 'SS mesh wire',
        description: 'Our stainless-steel mesh wire recognized in Australia and Canada market meet 8000+ hours neutral salt spray test ASTM B117-11 Pass cyclic salt FogUV exposure test ASTM D 5894-05 Over Knife shear test requirement Create a personalized outdoor living experience.',
        bgImage: `${process.env.PUBLIC_URL}/Section2.jpg`,
    },
    {
        title: 'Extrusion aluminum material',
        description: 'The simplicity of operation is the core of a carefully planned design Alphabet standardize as an unmatched new standard Unique structure for your special requirements IATF16949 automotive quality control system',
        bgImage: `${process.env.PUBLIC_URL}/Section3.jpg`,
    }
];

function ServicesSection() {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl text-center font-bold mb-8">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative p-6 text-black rounded-md shadow-lg overflow-hidden"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center filter"
                            style={{ backgroundImage: `url(${service.bgImage})` }}
                        ></div>
                        {/* Content in front */}
                        <div className="relative z-10 bg-white/70 p-4 rounded-md">
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="mb-4">{service.description}</p>
                            <button className="bg-white text-black px-4 py-2 rounded-full">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;