"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogosMarquee = () => {
  const logos = [
    { name: "AI Logo", src: "/ai logo.jpg", alt: "AI Logo" },
    { name: "Getto", src: "/Getto.png", alt: "Getto" },
    { name: "ShuttlePro", src: "/shuttlepro logo.jpg", alt: "ShuttlePro" },
    { name: "Stikks", src: "/stikks logo.png", alt: "Stikks" },
    { name: "Vouch", src: "/vouch logo.jpg", alt: "Vouch" }
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-gradient-to-r from-gray-900/90 to-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-gray-300">
            Trusted by teams at
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -50 * logos.length], // Move by the width of all original logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 px-6 py-4 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-600/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700/70 hover:border-gray-500/60"
                >
                  <div className="relative w-16 h-8 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={32}
                      className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosMarquee;
