"use client";

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

  return (
    <div className="bg-gradient-to-r from-gray-900/90 to-black/80 rounded-2xl shadow-2xl border border-gray-700/50 p-6 relative overflow-hidden logo-marquee-container">
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
          
          {/* Maximum scroll isolation container */}
          <div 
            className="overflow-hidden"
            style={{
              contain: 'size layout style paint',
              isolation: 'isolate',
              transform: 'translate3d(0, 0, 0)',
              height: 'auto',
              minHeight: '80px',
              touchAction: 'manipulation',
              overscrollBehavior: 'none'
            }}
          >
            <div className="logo-marquee flex gap-6 items-center">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-set1-${index}`}
                  className="flex-shrink-0 px-4 py-3 bg-gray-800/60 rounded-lg border border-gray-600/40 shadow-lg min-w-[120px] transition-transform duration-200 hover:scale-105"
                  style={{ display: 'flex' }}
                >
                  <div className={`relative w-16 h-8 flex items-center justify-center mx-auto ${
                    logo.name === "Vipani" ? "bg-white rounded-md p-1" : ""
                  }`}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={32}
                      className="object-contain"
                      priority={index < 3} // Prioritize first few images
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-set2-${index}`}
                  className="flex-shrink-0 px-4 py-3 bg-gray-800/60 rounded-lg border border-gray-600/40 shadow-lg min-w-[120px] transition-transform duration-200 hover:scale-105"
                  style={{ display: 'flex' }}
                >
                  <div className={`relative w-16 h-8 flex items-center justify-center mx-auto ${
                    logo.name === "Vipani" ? "bg-white rounded-md p-1" : ""
                  }`}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={32}
                      className="object-contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosMarquee;
