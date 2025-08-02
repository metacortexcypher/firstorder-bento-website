"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogosMarquee = () => {
  const logos = [
    { name: "AI Logo", src: "/ai logo.jpg", alt: "AI Logo" },
    { name: "Getto", src: "/Getto.png", alt: "Getto" },
    { name: "ShuttlePro", src: "/shuttlepro logo.jpg", alt: "ShuttlePro" },
    { name: "Stikks", src: "/stikks logo.png", alt: "Stikks" },
    { name: "Vouch", src: "/vouch logo.jpg", alt: "Vouch" },
    { name: "Vipani", src: "/vipani.svg", alt: "Vipani" },
    { name: "Chaishots", src: "/chaishots.jpg", alt: "Chaishots" },
    { name: "Quiklee", src: "/quiklee_india_logo.jpeg", alt: "Quiklee" },
    { name: "Jurru", src: "/jurru.jpeg", alt: "Jurru" },
    { name: "Dinebees", src: "/dinebees.jpg", alt: "Dinebees" }
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
            Few of the startups inside First Order
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 items-center"
              animate={{
                x: [0, -100 * logos.length], // Smoother animation with better spacing calculation
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Slower, smoother animation
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 px-4 py-3 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-600/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700/70 hover:border-gray-500/60 min-w-[120px]"
                >
                  <div className={`relative w-16 h-8 flex items-center justify-center mx-auto ${
                    logo.name === "Vipani" ? "bg-white rounded-md p-1" : ""
                  }`}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={32}
                      className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
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
