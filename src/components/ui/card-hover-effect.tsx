import React from 'react';

interface HoverEffectItem {
  title: string;
  description: string;
  link: string;
}

interface HoverEffectProps {
  items: HoverEffectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group bg-gray-100 transition-all duration-300"
        >
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-110 group-hover:scale-100"
            style={{
              backgroundImage: `url(${item.link})`,
            }}
          ></div>

          {/* Content Layer */}
          <div className="relative p-6 z-10">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-white">
              {item.description}
            </p>
          </div>

          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </div>
      ))}
    </div>
  );
}
