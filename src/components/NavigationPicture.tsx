import React, { useEffect, useState } from 'react';
import { FlipWords } from "./ui/flip-words";
import { cn } from "../lib/utils";
import { Boxes } from "../components/ui/background-boxes";
import HomePic from "../resources/GridBackground.jpg"

function NavPic() {
  const words = ["MODULAR", "EXTRUSION", "DECORATION", "ECOSYSTEM"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on initial load and on resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true if screen width is below 768px
    };
    
    checkScreenSize(); // Check once on initial render
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup listener
  }, []);
  return (
    isMobile? (
      <div
          className="h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${HomePic})` }}
      >
          <div className="text-black text-center">
          <h1 className={cn("md:text-6xl font-bold text-white relative z-20")}>
        ALPHABET
        </h1>
        <p className="text-center text-xl mt-2 text-neutral-300 relative z-20">
        Achieve
        <FlipWords words={words} /> <br />
        with Alphabet's expertise
        </p>
          </div>
      </div>
  ) : (
      <div className="h-[800px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
   
        <Boxes />
        <h1 className={cn("md:text-8xl font-bold text-white relative z-20")}>
        ALPHABET
        </h1>
        <p className="text-center text-2xl mt-2 text-neutral-300 relative z-20">
        Achieve
        <FlipWords words={words} /> <br />
        with Alphabet's expertise
        </p>
      </div>
    )
  );
};

export default NavPic;