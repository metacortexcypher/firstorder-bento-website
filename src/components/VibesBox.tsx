"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      <div 
        className="relative w-full rounded-2xl overflow-hidden bg-[#F5F5F5] shadow-sm h-full animate-optimized"
        style={{
          contain: 'layout style paint',
          isolation: 'isolate',
          transform: 'translateZ(0)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut",
              // Optimize for performance
              type: "tween"
            }}
            style={{
              contain: 'layout style paint',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Use Next.js Image component with fixed dimensions */}
            <Image
              src={vibesImages[currentIndex].src}
              alt={vibesImages[currentIndex].alt}
              fill
              className="object-cover"
              style={{ 
                objectPosition: 'center',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              priority={currentIndex === 0} // Prioritize first image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 35vw"
              onError={(e) => {
                console.log('Image failed to load:', vibesImages[currentIndex].src);
                e.currentTarget.style.display = 'none';
                // Show fallback content
                const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback content - hidden by default */}
            <div 
              className="absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
              style={{ 
                display: 'none',
                width: '100%',
                height: '100%'
              }}
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