import React, { useEffect, useRef } from 'react';
import NavPic from '../components/NavigationPicture';
import ServicesSection2 from '../components/ServiceSection2';

function Home() {
    useEffect(() => {
        // Scroll to the top when the page is visited
        window.scrollTo(0, 0);
      }, []);
    const servicesSectionRef = useRef<HTMLDivElement | null>(null);
    return (
        <div>
        <NavPic />
        <div ref={servicesSectionRef}>
          <ServicesSection2 />
        </div>
      </div>
    );
}

export default Home;