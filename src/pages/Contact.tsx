"use client";
import { WorldMap } from "../components/ui/world-map";
import { motion } from "motion/react";

function Contact() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          We have business{" "}
          <span className="text-neutral-400">
            {"Across The World".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Alphabet provides its architectural screen solutions and modular
          construction materials to clients worldwide, ensuring accessibility
          and support across all regions. With a strong global presence, our
          dedicated teams are ready to assist, and you can easily find contact
          points in every major area.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 15.5, lng: 114.5 }, // Shanghai
            end: { lat: -55, lng: 139.5 }, // Melbourne
          },
          {
            start: { lat: 15.5, lng: 114.5 }, // Shanghai
            end: { lat: 28, lng: -116 }, // San Francisco
          },
          {
            start: { lat: 15.5, lng: 114.5 }, // Shanghai
            end: { lat: 42, lng: 0 }, // London
          },
        ]}
      />
    </div>
  );
}

export default Contact;
