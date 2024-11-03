import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HoverEffectItem {
  title: string;
  description: string;
  link: string; // Image URL to show on hover
}

interface HoverEffectProps {
  items: HoverEffectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  const navigate = useNavigate(); // React Router's hook to programmatically navigate

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-300 bg-gray-800"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            style={{ backgroundImage: `url(${item.link})` }}
          ></div>

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

          {/* Content Layer */}
          <div className="relative p-6 z-10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white mb-4">
                {item.description}
              </p>
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => navigate('/services')} // Navigate to the /services page
              className="mt-auto bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
