import React from "react";
import { motion } from "framer-motion";

function DottedMask({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: "283px",
        height: "629px",
        maskImage: "url(#dotMask)",
        WebkitMaskImage: "url(#dotMask)",
      }}
    >

      {/* Moving gradient circle */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 z-0"
        style={{
          background:
            "linear-gradient(180deg, #A578FF 0%, #FF83BD 33.33%, #FFBA6D 66.67%, #FBE9BE 100%)",
          filter: "blur(40px)", // Adjust the blur as needed
        }}
        animate={{
          y: ["-200%", "210%"], // Adjust these values to control the movement range
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />

      {/**Mask layer */}

      <svg width="283" height="629">
        <defs>
          <mask id="dotMask">
            <rect width="283" height="629" fill="black" />
            <circle cx="175.937" cy="21.4127" r="3.38095" fill="white" />
            <circle cx="225.524" cy="55.2222" r="3.38095" fill="white" />
            <circle cx="279.619" cy="3.38095" r="3.38095" fill="white" />
            <circle cx="243.556" cy="73.2539" r="3.38095" fill="white" />
            <circle cx="193.968" cy="107.063" r="3.38095" fill="white" />
            <circle cx="124.095" cy="125.095" r="3.38095" fill="white" />
            <circle cx="38.4444" cy="228.778" r="3.38095" fill="white" />
            <circle cx="38.4444" cy="278.365" r="3.38095" fill="white" />
            <circle cx="2.38095" cy="314.429" r="3.38095" fill="white" />
            <circle cx="2.38095" cy="521.794" r="3.38095" fill="white" />
            <circle cx="20.4127" cy="625.476" r="3.38095" fill="white" />
            <circle cx="38.4444" cy="573.635" r="3.38095" fill="white" />
            <circle cx="72.254" cy="503.762" r="3.38095" fill="white" />
            <circle cx="157.905" cy="382.048" r="3.38095" fill="white" />
            <circle cx="72.254" cy="366.27" r="3.38095" fill="white" />
            <circle cx="124.095" cy="348.238" r="3.38095" fill="white" />
            <circle cx="142.127" cy="314.429" r="3.38095" fill="white" />
            <circle cx="227.778" cy="314.429" r="3.38095" fill="white" />
            <circle cx="51.9684" cy="400.079" r="3.38095" fill="white" />
            <circle cx="106.064" cy="433.889" r="3.38095" fill="white" />
            <circle cx="20.4127" cy="433.889" r="3.38095" fill="white" />
            <circle cx="38.4444" cy="469.952" r="3.38095" fill="white" />
          </mask>
        </defs>
      </svg>
    </div>
  );
}

export default DottedMask;
