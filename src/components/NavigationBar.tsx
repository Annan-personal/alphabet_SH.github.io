import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg ? 'bg-gray-800 text-white shadow-lg' : 'bg-transparent text-black'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo - ensure logo is visible on both transparent and dark backgrounds */}
                <img
                    src={`${process.env.PUBLIC_URL}/LOGO_transparent.png`}
                    alt="Company Logo"
                    className="h-12 w-auto"
                    style={{ filter: navbarBg ? 'brightness(100)' : 'none' }} // Optional: darken logo on transparent background
                />

                {/* Navigation Links */}
                <ul className="flex space-x-6 font-bold">
                    <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                    <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                    <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
