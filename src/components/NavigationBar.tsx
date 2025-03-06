import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../resources/IogoWhiteBackground.jpg";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Explicitly define the dropdown timeout type
  let dropdownTimeout: ReturnType<typeof setTimeout> | undefined;

  const handleScroll = useCallback(() => {
    setNavbarBg(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Open products dropdown without timeout
  const openDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsProductsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout = setTimeout(() => setIsProductsDropdownOpen(false), 200);
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        navbarBg ? "text-white shadow-lg" : "text-white shadow-lg"
      }`}
      style={{ backgroundColor: navbarBg ? "white" : "white" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO}
            alt="Company Logo"
            className="h-20"
            // style={{ filter: navbarBg ? 'brightness(100)' : 'brightness(100)' }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:text-blue-300 text-black text-xl">
              Home
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to="/products"
              className="hover:text-blue-300 text-black text-xl"
            >
              Products
            </Link>
            {isProductsDropdownOpen && (
              <ul className="absolute z-50 left-0 mt-2 w-48 bg-gray-200 text-black rounded shadow-lg text-l">
                <li>
                  <Link
                    to="/products/product1"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    High-Tensile Mesh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/product2"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Patio and Enclosures Mesh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/product3"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Hurricane Protection Screens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/product4"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Fiberglass Visible Mesh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/product5"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Perforated Aluminum Mesh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/product6"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Curtain Wall
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-300 text-black text-xl"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-300 text-black text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 text-black flex flex-col items-center md:hidden">
            <Link
              onClick={toggleMenu}
              to="/"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Products
              </button>
              {isProductsDropdownOpen && (
                <ul className="w-full bg-gray-800 text-black">
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product1"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product2"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product3"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product4"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product5"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 5
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to="/products/product6"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Product 6
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              onClick={toggleMenu}
              to="/about"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              onClick={toggleMenu}
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
