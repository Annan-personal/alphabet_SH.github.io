import React from "react";
import AdvantageImage from "../resources/KeyAdvantage.jpg"; // Replace with your actual image path

function KeyAdvantagesSection() {
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center p-8 md:pl-16 space-y-6 md:space-y-0 md:space-x-12"
            style={{ backgroundColor: "#0f172a" }}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={AdvantageImage}
                    alt="Advantage Image"
                    className="w-full h-auto max-h-80 max-w-80 rounded-lg object-cover" // Set width and height to create a square image
                />
            </div>

            {/* Key Advantages Section */}
            <div className="w-full md:w-1/2 space-y-4 text-white md:ml-6">
                <div className="max-w-lg">
                    <h3 className="text-2xl font-bold border-b border-orange-500 pb-2 mb-4">
                        ADVANTAGES
                    </h3>
                </div>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Superior in strength</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Fall prevention solutions</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Architecturally appealing</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Clear vision</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Air flow and circulation</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>60% UV blockage</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Protection from flies and mosquitoes</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>No bars</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Easily used entry and exit points</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Custom made applications</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Impact resistance</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default KeyAdvantagesSection;
