import React from 'react';
import { FlipWords } from "./ui/flip-words";
import { cn } from "../lib/utils";
import {Boxes} from "../components/ui/background-boxes";

function NavPic() {
    const words = ["MODULAR", "EXTRUSION", "DECORATION", "ECOSYSTEM"];
    // return (
    //     <div
    //         className="h-[600px] bg-cover bg-center flex items-center justify-center"
    //         style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/HomePagePic.jpg)` }}
    //     >
    //         <div className="text-black text-center">
    //             <h1 className="text-6xl font-bold mb-4">ALPHABET</h1>
    //             <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
    //                 Achieve
    //                 <FlipWords words={words} /> <br />
    //                 with Alphabet's expertise
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="h-[600px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
     
          <Boxes />
          <h1 className={cn("md:text-6xl font-bold text-white relative z-20")}>
          ALPHABET
          </h1>
          <p className="text-center text-xl mt-2 text-neutral-300 relative z-20">
          Achieve
          <FlipWords words={words} /> <br />
          with Alphabet's expertise
          </p>
        </div>
      );
};

export default NavPic;