import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ProductImage1 from "../../resources/Product1-top.jpg";
import section2_1 from "../../resources/Section2-1.jpg";
import section2_2 from "../../resources/Section2-2.jpg";
import section2_3 from "../../resources/Section2-3.jpg";
import ImageGridWithParagraph from "../../components/ImageGridWithParagraph";
import KeyFeaturesSection from "../../components/KeyFeaturesSection";
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
    const node = secondSectionRef.current;
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

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>High-Tensile Mesh - Products - Alphabet_SH</title>
      <meta
        name="description"
        content="High-tensile stainless-steel mesh from Alphabet_SH — passing 8,000+ hours of neutral salt spray (ASTM B117-11), cyclic salt fog/UV exposure (ASTM D 5894-05), and knife shear tests."
      />
    </Helmet>
    <main style={{ backgroundColor: "#0f172a" }} className="text-white min-h-screen">
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
        Key Features and Advantages
      </motion.h2>
      <KeyFeaturesSection />

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
                    alt="High-tensile mesh specifications"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            </div>

    </main>
    </>
  );
}

export default Product1;
