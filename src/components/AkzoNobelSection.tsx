import React from "react";
import akzoImage1 from "../resources/akzoImage1.jpg"; // Replace with actual image paths
import akzoImage2 from "../resources/akzoImage2.jpg";
import akzoImage3 from "../resources/akzoImage3.jpg";

function AkzoNobelSection() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center text-white py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-6 space-y-8 md:space-y-0 md:space-x-8">
        {/* Circular Image Section */}
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white">
              <img src={akzoImage1} alt="Akzo Nobel Image 1" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Wave */}
            <svg
              className="absolute left-[250px] top-1/2 transform -translate-y-1/2 w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12c3 4 7 4 10 0s7-4 10 0" strokeWidth="2" />
            </svg>
          </div>

          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white">
            <img src={akzoImage2} alt="Akzo Nobel Image 2" className="w-full h-full object-cover" />
          </div>

          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white">
            <img src={akzoImage2} alt="Akzo Nobel Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Dotted Pattern and Text Section */}
        <div className="flex flex-col items-center md:items-start space-y-8">
          {/* Dotted Pattern */}
          <div className="w-32 h-32 border-2 border-dotted border-white opacity-70" />

          {/* Text Content */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">AkzoNobel China Sales Director</h2>
            <p className="text-lg">
              Congratulations on the 20 years salt spray test passed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AkzoNobelSection;
