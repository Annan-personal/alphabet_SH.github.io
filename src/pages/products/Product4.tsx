import React, { useEffect, useState, useRef } from 'react';
import ProductImage1 from "../../resources/Product4-top.jpg";
import MainProductSection from "../../components/MainProductSection";

function Product4() {
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
        title="Fiberglass Visible Mesh"
        description="Offering a seamless blend of indoor and outdoor living."
      />

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
