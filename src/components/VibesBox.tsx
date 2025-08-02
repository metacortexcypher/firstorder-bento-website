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
      <div className="relative flex-1 w-full rounded-lg overflow-hidden bg-[#F5F5F5] shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={vibesImages[currentIndex].src}
              alt={vibesImages[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 35vw"
              priority={currentIndex === 0}
              unoptimized
            />
          </motion.div>
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