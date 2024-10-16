import React, { useEffect, useState } from 'react';
import section1_1 from '../resources/Section1-1.jpg';
import section1_2 from '../resources/Section1-2.jpg';
import section1_3 from '../resources/Section1-3.jpg';

function ServicesPage() {
  const [animate, setAnimate] = useState(false);

  // Trigger animation after a slight delay
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto px-6">
        {/* Left Large Image */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
          style={{ maxHeight: '500px' }} // Set maximum height for the large image
        >
          <img
            src={section1_1}
            alt="Section 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Two Smaller Images */}
        <div className="grid grid-rows-2 gap-4">
          <div
            className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 delay-100 ${
              animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
            style={{ maxHeight: '240px' }} // Set maximum height for the first small image
          >
            <img
              src={section1_2}
              alt="Section 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 delay-200 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ maxHeight: '240px' }} // Set maximum height for the second small image
          >
            <img
              src={section1_3}
              alt="Section 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
