import React from 'react';
import { FlipWords } from "./ui/flip-words";
import { cn } from "../lib/utils";

function NavPic() {
    const words = ["MODULAR", "EXTRUSION", "DECORATION", "ECOSYSTEM"];
    return (
        <div
            className="h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/HomePagePic.jpg)` }}
        >
            <div className="text-black text-center">
                <h1 className="text-6xl font-bold mb-4">ALPHABET</h1>
                <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                    Achieve
                    <FlipWords words={words} /> <br />
                    with Alphabet's expertise
                </div>
            </div>
        </div>
    );
};

export default NavPic;