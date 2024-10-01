import React, { useState } from 'react';

function Footer() {
    // const [condition, setCondition] = useState(true);
    const companyIntro = "Alphabet patented modular structure ecosystem aligns the requirements of wholesalers, retailers, and installers, providing a framework dedicated to mutual success and customer contentment.";

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 items-start">  {/* Changed items-center to items-start */}

                    {/* Company Logo */}
                    <div className="flex justify-center md:justify-start">
                        <img src="/LOGO_transparent.png" alt="Company Logo" className="h-12 w-auto" style={{ filter: 'brightness(100)' }} />  {/* Reduced logo size */}
                    </div>

                    {/* Company Info */}
                    <div className="text-center md:text-left md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p>
                            {companyIntro}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <a
                            href="https://www.linkedin.com/in/az2345/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 justify-center md:justify-start hover:text-blue-300"
                        >
                            <img src="/LinkedIn_LOGO.png" alt="LinkedIn" className="h-4 w-auto" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} ALPHABET. All Rights Reserved. Desgined by Annan Zhang.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
