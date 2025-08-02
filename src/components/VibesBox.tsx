"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VibesBoxProps {
  className?: string;
}

const vibesImages = [
  {
    src: "/2.png",
    alt: "First Order Vibes 1"
  },
  {
    src: "/3.png",
    alt: "First Order Vibes 2"
  },
  {
    src: "/4.png",
    alt: "First Order Vibes 3"
  },
  {
    src: "/5.png",
    alt: "First Order Vibes 4"
  },
  {
    src: "/6.png",
    alt: "First Order Vibes 5"
  },
  {
    src: "/7.png",
    alt: "First Order Vibes 6"
  },
  {
    src: "/8.png",
    alt: "First Order Vibes 7"
  }
];

export const VibesBox = ({ className = "" }: VibesBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vibesImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative w-full h-full flex flex-col ${className}`}>
      <div className="relative flex-1 w-full rounded-lg overflow-hidden bg-[#F5F5F5] shadow-sm min-h-[200px] sm:min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Use regular img tag for better mobile compatibility */}
            <img
              src={vibesImages[currentIndex].src}
              alt={vibesImages[currentIndex].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Image failed to load:', vibesImages[currentIndex].src);
                e.currentTarget.style.display = 'none';
                // Show fallback content
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback content - hidden by default */}
            <div 
              className="absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
              style={{ display: 'none' }}
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <p className="text-gray-600 text-sm font-medium">First Order Vibes</p>
                <p className="text-gray-400 text-xs">Building the future</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2 flex-shrink-0">
        {vibesImages.map((_, index) => (
          <div
            key={index}
            className={`h-0.5 sm:h-1 transition-all duration-300 ${
              index === currentIndex 
                ? "w-4 sm:w-8 bg-[#FF1493]" 
                : "w-0.5 sm:w-1 bg-[#CCCCCC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};