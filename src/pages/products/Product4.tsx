import React, { useEffect, useState, useRef } from "react";
import ProductImage1 from "../../resources/Product4-top.jpg";
import { motion } from "framer-motion";
import MainProductSection from "../../components/MainProductSection";
import section4_1 from "../../resources/product4_1.jpg";
import section4_2 from "../../resources/product4_2.jpg";
import section4_3 from "../../resources/product4_3.jpg";
import ImageGridWithParagraph from "../../components/ImageGridWithParagraph";
import KeyFeaturesSection from "../../components/KeyFeaturesSection";
import KeyAdvantagesSection from "../../components/KeyAdvantagesSection";
import KeyFeatures from "../../resources/KeyFeaturesPro4.jpg";
import ScreenSize from "../../components/ScreenSize";
import ScreenSize1 from "../../resources/ScreenSize1.jpg";
import ScreenSize2 from "../../resources/ScreenSize2.jpg";
import ScreenSize3 from "../../resources/ScreenSize3.jpg";
import ScreenSize4 from "../../resources/ScreenSize4.jpg";
import Product4Spec from "../../resources/Product4Spec.jpg";

function KeyFeaturesSectionPro4() {
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
            <span>Made from E-Glass fibre (Alkali-Free)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Easy to spline into screen channels</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>High weave quality with good consistency</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Matt finish recommended to reduce sun glare</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Coating is UV stabilized to improve longevity</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Product4() {
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);
  const para2 =
    "FIBREGLASS flyscreen is an economical option for producing residential window and door screens. It has good flexibility and will not dent, corrode or stain. This screen has a matt charcoal coating ideally suited to reduce sun glare.";

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
    <div
      style={{ backgroundColor: "#0f172a" }}
      className="text-white min-h-screen"
    >
      {/* Main Product Section */}
      <MainProductSection
        imageSrc={ProductImage1}
        title="Fiberglass Visible Mesh"
        description="Offering a seamless blend of indoor and outdoor living."
      />

      {/* Service Sections */}
      <div ref={secondSectionRef} className="mt-4">
        {" "}
        {/* Adjusted margin here */}
        <ImageGridWithParagraph
          images={[
            { src: section4_1, alt: "Section 2-1" },
            { src: section4_2, alt: "Section 2-2" },
            { src: section4_3, alt: "Section 2-3" },
          ]}
          paragraph={para2}
          triggerAnimation={true}
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
      <KeyFeaturesSectionPro4 />
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
        Screen Size
      </motion.h2>
      <br />
      <div ref={secondSectionRef} className="mt-4">
        {" "}
        {/* Adjusted margin here */}
        <ScreenSize
          images={[
            { src: ScreenSize1, alt: "Image A" },
            { src: ScreenSize2, alt: "Image B" },
            { src: ScreenSize3, alt: "Image C" },
            { src: ScreenSize4, alt: "Image D" },
          ]}
          triggerAnimation={true}
        />
      </div>
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
      <div className="flex flex-col items-center space-y-4 pt-10">
      <br />
      <div className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 `}
                style={{ maxHeight: '600px', maxWidth: '800px' }}
            >
                <img
                    src={Product4Spec}
                    alt="Product4Spec"
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

export default Product4;
