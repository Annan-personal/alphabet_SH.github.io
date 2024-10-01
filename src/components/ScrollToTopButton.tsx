import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll back to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                    style={{ zIndex: 1000 }}
                >
                    {/* SVG Button */}
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        className="w-6 h-6"
                    >
                        <path
                            d="M14 1.5l12.5 12.5h-7.5v12.5h-10v-12.5h-7.5z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
