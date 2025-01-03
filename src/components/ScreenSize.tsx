import React, { useEffect, useState } from 'react';

interface ScreenSizeNewProps {
    images: { src: string; alt: string }[];
    triggerAnimation: boolean;
}

const ScreenSize: React.FC<ScreenSizeNewProps> = ({ images, triggerAnimation }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (triggerAnimation) {
            setAnimate(true);
        }
    }, [triggerAnimation]);

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-32">
                {images.slice(0, 3).map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
                            animate? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        }`}
                        style={{ maxHeight: '200px', maxWidth: '200px' }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
                animate? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
                style={{ maxHeight: '800px', maxWidth: '1000px' }}
            >
                <img
                    src={images[3].src}
                    alt={images[3].alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ScreenSize;