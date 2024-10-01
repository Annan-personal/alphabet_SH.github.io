import React, { useState, useEffect } from 'react';

function Navbar() {
    const [navbarBg, setNavbarBg] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg(true);  // Set background when scroll is past 50px
            } else {
                setNavbarBg(false);  // Transparent when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);  // Clean up event listener
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                navbarBg ? 'bg-gray-800 text-white shadow-lg' : 'bg-transparent text-black'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <img src="/LOGO_transparent.png" alt="Company Logo" className="h-12 w-auto" />

                {/* Navigation Links */}
                <ul className="flex space-x-6 font-bold">
                    <li><a href="#home" className="hover:text-blue-300">Home</a></li>
                    <li><a href="#services" className="hover:text-blue-300">Services</a></li>
                    <li><a href="#about" className="hover:text-blue-300">About</a></li>
                    <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
