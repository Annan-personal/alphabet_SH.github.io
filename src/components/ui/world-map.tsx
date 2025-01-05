import React, { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    position: { lat: number; lng: number; label?: string[] }; // Single position
  }>;
  lineColor?: string;
  theme?: "light" | "dark"; // Add theme as a prop
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  theme = "light", // Default theme
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans md:px-10">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <circle
              cx={projectPoint(dot.position.lat, dot.position.lng).x}
              cy={projectPoint(dot.position.lat, dot.position.lng).y}
              r="2"
              fill={lineColor}
            />
            <circle
              cx={projectPoint(dot.position.lat, dot.position.lng).x}
              cy={projectPoint(dot.position.lat, dot.position.lng).y}
              r="2"
              fill={lineColor}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="2"
                to="8"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
            {Array.isArray(dot.position.label) && (
              <text
                x={projectPoint(dot.position.lat, dot.position.lng).x}
                y={projectPoint(dot.position.lat, dot.position.lng).y + 10} // Adjust for positioning below the dot
                textAnchor="middle"
                fontSize="7"
                fill={theme === "dark" ? "white" : "#0f172a"} // Adjust text color
              >
                {dot.position.label.map((line, index) => (
                  <tspan
                    x={projectPoint(dot.position.lat, dot.position.lng).x}
                    dy={index === 0 ? "0" : "1.2em"}
                    key={index}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
