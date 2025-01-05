import React from "react";
import Image from "../resources/whyAl.jpg"; // Replace with the correct image import path

function WhyAlphabet() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Line */}
        <div className="w-full border-t border-gray-500 mb-8"></div>
        <br />
        <br />
        <br />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-200 rounded-lg shadow-md p-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={Image}
              alt="Antimicrobial Fabrics and Screening"
              className="w-full h-auto rounded-lg object-cover shadow-sm"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">
              Why Alphabet?
            </h2>
            <p className="mb-4 md:text-xl">
              It is more important than ever to keep interior furnishings as
              clean as possible. Bacteria, mold, and mildew are the sworn
              enemies of outdoor fabric, shades, and screens. These stain-and-odor-causing
              bacteria thrive on heat and humidity and can be extremely
              destructive. They can also cause structural damage to the fibers
              and shorten the overall life of your fabric.
            </p>
            <p className="mb-6 md:text-xl">
              The solution is to reduce the growth of mold, mildew, and other
              microbes before it even starts by choosing antimicrobial fabric
              and screening infused with Microban®, exclusive only to Phifer
              products.
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAlphabet;
