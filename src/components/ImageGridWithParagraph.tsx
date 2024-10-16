import React, { useEffect, useState, useRef } from 'react';

interface ImageGridWithParagraphProps {
  images: { src: string; alt: string }[]; // Array of image objects
  paragraph: string; // Paragraph text
  triggerAnimation: boolean; // Controls when the animation is triggered
}

const ImageGridWithParagraph: React.FC<ImageGridWithParagraphProps> = ({
  images,
  paragraph,
  triggerAnimation,
}) => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when `triggerAnimation` is true
  useEffect(() => {
    if (triggerAnimation) {
      setAnimate(true);
    }
  }, [triggerAnimation]);

  return (
    <div className="flex flex-col justify-center items-center py-20"> 
      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto px-6 mb-8">
        {/* Left Large Image */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
          style={{ maxHeight: '500px' }}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Two Smaller Images */}
        <div className="grid grid-rows-2 gap-4">
          <div
            className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 delay-100 ${
              animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
            style={{ maxHeight: '240px' }}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 delay-200 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ maxHeight: '240px' }}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-lg text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageGridWithParagraph;
