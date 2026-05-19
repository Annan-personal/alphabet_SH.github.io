import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageGridWithParagraph from '../components/ImageGridWithParagraph';
import section1_1 from '../resources/Section1-1.jpg';
import section1_2 from '../resources/Section1-2.jpg';
import section1_3 from '../resources/Section1-3.jpg';
import section2_1 from '../resources/Section2-1.jpg';
import section2_2 from '../resources/Section2-2.jpg';
import section2_3 from '../resources/Section2-3.jpg';

function ServicesPage() {
  const para1 = "We pride ourselves on delivering top-notch services in various industries. From innovative solutions to reliable manufacturing practices, our team ensures that every client receives the highest quality service.";
  const para2 = "Our stainless-steel mesh wire recognized in Australia and Canada market meet 8000+ hours neutral salt spray test ASTM B117-11 Pass cyclic salt FogUV exposure test ASTM D 5894-05 Over Knife shear test requirement Create a personalized outdoor living experience.";

  const [secondSectionVisible, setSecondSectionVisible] = useState(false);

  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Observe when the second section enters the viewport
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
        <title>Services - Alphabet_SH</title>
        <meta
          name="description"
          content="Alphabet_SH delivers high-quality architectural mesh services for clients worldwide, backed by rigorous salt-spray, UV, and shear testing and international certifications."
        />
      </Helmet>
      <main className="min-h-screen bg-gray-100">
        <h1 className="sr-only">Services</h1>
        {/* First Image Grid with Paragraph */}
      <ImageGridWithParagraph
        images={[
          { src: section1_1, alt: 'Section 1-1' },
          { src: section1_2, alt: 'Section 1-2' },
          { src: section1_3, alt: 'Section 1-3' },
        ]}
        paragraph={para1}
        triggerAnimation={true} // First section always visible
      />

      {/* Second Image Grid with Paragraph, with scroll animation */}
      <div ref={secondSectionRef}>
        <ImageGridWithParagraph
          images={[
            { src: section2_1, alt: 'Section 2-1' },
            { src: section2_2, alt: 'Section 2-2' },
            { src: section2_3, alt: 'Section 2-3' },
          ]}
          paragraph={para2}
          triggerAnimation={secondSectionVisible} // Trigger animation when second section becomes visible
        />
        </div>
      </main>
    </>
  );
}

export default ServicesPage;
