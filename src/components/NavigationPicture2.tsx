import React from "react";
import BackgroundImage from "../resources/HomePagePic2.jpg";
import { FlipWords } from "./ui/flip-words";

function HomePageHero() {
  const words = ["MODULAR", "EXTRUSION", "DECORATION", "ECOSYSTEM"];
  return (
    <div className="z-0">
      <div
        className="w-full h-screen bg-cover bg-center items-center justify-center pt-6 relative"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="pt-20 pr-[5%]">
          <div className="inset-0 flex items-start justify-end pr-8 pt-8">
            <div className="border-2 border-white p-1">
              <div className="bg-white bg-opacity-80 shadow-lg p-6 md:p-10">
                <h1 className="text-7xl font-bold mb-4 text-center">
                  <span className="text-red-700">Al</span>
                  <span className="text-green-700">phabet</span>
                  <span
                    className="text-green-700 text-4xl pl-2"
                    style={{ verticalAlign: "-8px" }}
                  >
                    &reg;
                  </span>
                </h1>
                <p className="text-center text-green-700 text-3xl relative -mt-4">
                  CONSTRUCTING YOUR LIFE
                </p>
                <div className="my-4 h-1 bg-green-700 -mt-0"></div>
                <p className="font-bold text-center text-2xl mt-2 relative z-20">
                  Achieve
                  <FlipWords words={words} /> <br />
                  with the morden constructing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageHero;
