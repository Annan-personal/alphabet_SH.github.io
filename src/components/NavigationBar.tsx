import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [navbarBg, setNavbarBg] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Optimize scroll event with useCallback
    const handleScroll = useCallback(() => {
        setNavbarBg(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Toggle menu without delay
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg ? 'text-white shadow-lg' : 'text-white shadow-lg'}`}
            style={{ backgroundColor: navbarBg ? '#0f172a' : '#0f172a' }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <img
                    src={`${process.env.PUBLIC_URL}/LOGO_transparent.png`}
                    alt="Company Logo"
                    className="h-12 w-auto"
                    style={{ filter: navbarBg ? 'brightness(100)' : 'brightness(100)' }}
                    loading="lazy" // Lazy load the logo for faster initial load
                />

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-6 font-bold">
                    <li><Link to="/" className="hover:text-blue-300 text-white">Home</Link></li>
                    <li><Link to="/services" className="hover:text-blue-300 text-white">Services</Link></li>
                    <li><Link to="/about" className="hover:text-blue-300 text-white">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-300 text-white">Contact</Link></li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center md:hidden">
                        <Link onClick={toggleMenu} to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
                        <Link onClick={toggleMenu} to="/services" className="block px-4 py-2 hover:bg-gray-700">Services</Link>
                        <Link onClick={toggleMenu} to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
                        <Link onClick={toggleMenu} to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
