import React from "react";
import KeyFeatures from "../resources/KeyFeatures.jpg";

function KeyFeaturesSection() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center p-8 md:pl-16 space-y-6 md:space-y-0 md:space-x-12"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={KeyFeatures}
          alt="Product"
          className="w-full h-auto max-h-80 max-w-80 rounded-lg object-cover" // Increased max height for a larger image
        />
      </div>

      {/* Key Features Section */}
      <div className="w-full md:w-1/2 space-y-4 text-white md:ml-6"> {/* Added margin-left for additional spacing */}
      <div className="max-w-lg"> 
        <h3 className="text-2xl font-bold border-b border-orange-500 pb-2 mb-4">
          Key Features
        </h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Tested and passed Australian Standards</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Provides security, clarity of vision and strength</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Corrosion resistant and perfect view</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Choice of retention systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Part of a wide range of security and screening solutions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default KeyFeaturesSection;
