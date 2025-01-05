import React from "react";
import AkzoNobelCertificationsSection from "./AkzoNobelCertificationsSection";
import AzumaCertificationsSection from "./AzumaCertificationsSection";

const ResourceSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Wrapper to match AntimicrobialSection width */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full border-t border-gray-500 mb-8"></div>
        <br />
        <br />
        <h2 className="text-4xl text-center font-bold mb-8">We Proudly provide our Products with tests passing</h2>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Image on the left */}
          <AzumaCertificationsSection />
          {/* Text on the right */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 text-center">
            <h3 className="text-3xl font-bold mb-4 text-center">
              AZUMA HongKong Test
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <h3 className="text-2xl">
                {" "}
                Azuma provides innovative, engaging quality products that draw
                from our strengths in design, testing, engineering and tooling.{" "}
              </h3>
            </ul>
            <a
              href="https://www.azumatesting.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-2xl text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Image on the left */}
          <AkzoNobelCertificationsSection />
          {/* Text on the right */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 text-center">
            <h3 className="text-3xl font-bold mb-4 text-center">
              AkzoNobel Test
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <h3 className="text-2xl">
                {" "}
                Sustainability is one of our core values – and is integrated in everything we do. We strive to lead our industry by empowering people and reducing our impact on the planet – while consistently innovating to deliver the most sustainable solutions for our customers.{" "}
              </h3>
            </ul>
            <a
              href="https://www.akzonobel.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-2xl text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
