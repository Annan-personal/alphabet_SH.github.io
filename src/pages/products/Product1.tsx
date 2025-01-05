import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import ProductImage1 from "../../resources/Product1-top.jpg";
import section2_1 from "../../resources/Section2-1.jpg";
import section2_2 from "../../resources/Section2-2.jpg";
import section2_3 from "../../resources/Section2-3.jpg";
import ImageGridWithParagraph from "../../components/ImageGridWithParagraph";
import AzumaCertificationsSection from "../../components/AzumaCertificationsSection";
import AkzoNobelCertificationsSection from "../../components/AkzoNobelCertificationsSection";
import KeyFeaturesSection from "../../components/KeyFeaturesSection";
import KeyAdvantagesSection from "../../components/KeyAdvantagesSection";
import MainProductSection from "../../components/MainProductSection";
import Product1Spec from "../../resources/Product1Spec.jpg";

function Product1() {
  const para2 = "Our stainless-steel mesh wire recognized in Australia and Canada market meet 8000+ hours neutral salt spray test ASTM B117-11 Pass cyclic salt FogUV exposure test ASTM D 5894-05 Over Knife shear test requirement Create a personalized outdoor living experience.";

  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the top when the page is visited
    window.scrollTo(0, 0);
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
        title="High-Tensile High-Quality Mesh"
        description="With groundbreaking technology and unparalleled design."
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

      {/* Key features and Advantages Sections */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We proudly provide our products with all certifications
      </motion.h2>
      {/* <AzumaCertificationsSection />
      <AkzoNobelCertificationsSection /> */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Key Features and Advantages
      </motion.h2>
      <KeyFeaturesSection />
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
      <div className="flex flex-col items-center space-y-4 pt-10">
      <div className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 `}
                style={{ maxHeight: '600px', maxWidth: '800px' }}
            >
                <img
                    src={Product1Spec}
                    alt="Product1Spec"
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

export default Product1;
