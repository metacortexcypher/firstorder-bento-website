"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VibesBoxProps {
  className?: string;
}

const vibesImages = [
  {
    src: "https://images.unsplash.com/photo-1583508085307-0a4d55ecd7e0?w=500&h=300&fit=crop&crop=center",
    alt: "Creative abstract gradient"
  },
  {
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&h=300&fit=crop&crop=center",
    alt: "Minimalist architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop&crop=center",
    alt: "Geometric patterns"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd8b?w=500&h=300&fit=crop&crop=center",
    alt: "Neon lights"
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
      <div className="relative flex-1 w-full rounded-lg overflow-hidden bg-[#F5F5F5] shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={vibesImages[currentIndex].src}
            alt={vibesImages[currentIndex].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4 space-x-2 flex-shrink-0">
        {vibesImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-[#FF1493]" : "w-1 bg-[#CCCCCC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};