import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import ProductImage1 from "../../resources/Product2-top.jpg";
import section2_1 from "../../resources/product2_1.jpg";
import section2_2 from "../../resources/product2_2.jpg";
import section2_3 from "../../resources/product2_3.jpg";
import ImageGridWithParagraph from "../../components/ImageGridWithParagraph";
import AzumaCertificationsSection from "../../components/AzumaCertificationsSection";
import AkzoNobelCertificationsSection from "../../components/AkzoNobelCertificationsSection";
import KeyFeatures from "../../resources/KeyFeaturesSectionPro2.jpg";
import KeyAdvantagesSection from "../../components/KeyAdvantagesSection";
import MainProductSection from "../../components/MainProductSection";
import Product1Spec from "../../resources/Product1Spec.jpg";
import ScreenSize from "../../components/ScreenSize";
import SPEC1 from "../../resources/SPEC1.jpg";
import SPEC2 from "../../resources/SPEC2.jpg";
import SPEC3 from "../../resources/SPEC3.jpg";
import SPEC4 from "../../resources/SPEC4.jpg";


function KeyFeaturesSectionPro2() {
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
        <div className="w-full md:w-1/2 space-y-4 text-white md:ml-6">
          {" "}
          {/* Added margin-left for additional spacing */}
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold border-b border-orange-500 pb-2 mb-4">
              Key Features
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Can be installed with less force.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Uniformly straight weave, compared with similar mesh fabric, makes the screen very easy and quick to install.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Improved elongation compared to similar aluminium products for better break-resistance.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Improved Powder coated finish.</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

function Spec() {
    return (
        <div className="flex flex-col items-center space-y-4 pt-6">
        <div className="flex space-x-5">
                <div
                    key={1}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
                        true? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                    style={{ maxHeight: '200px', maxWidth: '400px', marginTop: '100px' }}
                >
                    <img
                        src={SPEC1}
                        alt="SPEC1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    key={1}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
                        true? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                    style={{ maxHeight: '400px', maxWidth: '400px' }}
                >
                    <img
                        src={SPEC2}
                        alt="SPEC2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    key={1}
                    className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
                        true? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                    style={{ maxHeight: '200px', maxWidth: '400px', marginTop: '100px' }}
                >
                    <img
                        src={SPEC3}
                        alt="SPEC3"
                        className="w-full h-full object-cover"
                    />
                </div>
        </div>
        </div>
    )
}

function Product2() {
  const para2 = "ALUMINIUM flyscreen has been optimised to achieve a balance between ease of installation and surface flatness. A highly consistent, deep-black powder coating creates a crisp and open appearance, as well as greater weather resistance.";

  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Observe when the second section of the services page enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSecondSectionVisible(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="text-white min-h-screen">
      {/* Main Product Section */}
      <MainProductSection
        imageSrc={ProductImage1}
        title="Patio and Enclosures Mesh"
        description="A wide usage in person and business."
      />

      {/* Service Sections */}
      <div ref={secondSectionRef} className="mt-4"> {/* Adjusted margin here */}
        <ImageGridWithParagraph
          images={[
            { src: section2_1, alt: "Section 2-1" },
            { src: section2_2, alt: "Section 2-2" },
            { src: section2_3, alt: "Section 2-3" },
          ]}
          paragraph={para2}
          triggerAnimation={secondSectionVisible}
        />
      </div>

      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Key Features and Advantages
      </motion.h2>
      <KeyFeaturesSectionPro2 />
      {/* <KeyAdvantagesSection /> */}
      <br />
      <br />
      <br />
      <br />

      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        SPECIFICATIONS
      </motion.h2>
      <Spec />

      <div className="flex flex-col items-center space-y-4 pt-10">
      <br />
      <div className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 `}
                style={{ maxHeight: '600px', maxWidth: '800px' }}
            >
                <img
                    src={SPEC4}
                    alt="SPEC4"
                    className="w-full h-full object-cover"
                />
            </div>
            </div>

      {/* Add some spaces */}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Product2;
