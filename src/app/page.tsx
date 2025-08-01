"use client";

import { useState } from 'react';
import FoundingPrinciples from '@/components/FoundingPrinciples';
import { VibesBox } from '@/components/VibesBox';
import ExperimentsAndLabs from '@/components/ExperimentsLabs';
import FounderMemo from '@/components/FounderMemo';
import LogosMarquee from '@/components/LogosMarquee';

export default function Home() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(true);

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Left Column - 40% */}
        <div className="w-[40vw] h-screen flex flex-col border-r border-gray-200 p-4">
          {/* Container for both Jordan Jenkins and Based in NYC boxes */}
          <div className="h-full flex flex-col gap-4">
            {/* Top Box - Main Brand - 70% of container */}
            <div className="flex-[7] rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col justify-center relative overflow-hidden">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: "url('/firstbox.png')" }}
              ></div>
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
              
              <div className="w-full relative z-10">
                <h1 className="font-bold text-white text-[4.5vw] leading-[0.85] tracking-[-0.02em] mb-6 drop-shadow-lg">
                  A New Order Begins
                </h1>
                <div className="space-y-1">
                  <p className="text-white text-lg leading-snug drop-shadow-lg font-semibold">
                    We're not fixing the old system.
                  </p>
                  <p className="text-white text-lg leading-snug drop-shadow-lg font-semibold">
                    We're building a new world for startup founders.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - Split into 2 boxes - 30% of container */}
            <div className="flex-[3] flex gap-4">
              {/* Community Box - Left */}
              <div className="flex-1 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <p className="text-xs text-gray-600 mb-3 font-medium">Join First Order Community</p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Social & Location Box - Right */}
              <div className="flex-1 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-md"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-3">
                    <p className="text-xs text-gray-600 mb-2 font-medium">Follow Socials</p>
                    <div className="flex justify-center space-x-2">
                      <a
                        href="#"
                        className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="px-2 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        X
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-700 font-medium">Built from Hyderabad ❤️</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 60% */}
        <div className="w-[60vw] h-screen bg-gray-100 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Row 1 - Founding Principles (60% width, 50% height) and Vibes Box (35% width, 50% height) side by side */}
            <div className="flex gap-4 h-[50vh]">
              <div className="w-[60%]">
                <FoundingPrinciples />
              </div>
              <div className="w-[35%] h-full">
                <VibesBox />
              </div>
            </div>

            {/* Row 1.5 - Scrolling Logos Marquee */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <LogosMarquee />
              </div>
            </div>

            {/* Row 1.75 - YouTube Video */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/sbY5m-OEess?rel=0&modestbranding=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0"
                      title="First Order Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Experiments and Labs */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <ExperimentsAndLabs />
              </div>
            </div>

            {/* Row 3 - Founder Memo */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <FounderMemo />
              </div>
            </div>

            {/* Client logos */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-8 opacity-50">
                <span className="text-sm text-gray-600">Trusted by:</span>
                <div className="flex space-x-6 items-center">
                  <div className="text-sm font-semibold">Merck</div>
                  <div className="text-sm font-semibold">Discord</div>
                  <div className="text-sm font-semibold">Huel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal Overlay */}
      {isNewsletterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
              <p className="text-gray-600 mb-4">Subscribe to get updates on new projects and insights.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                />
                <button 
                  onClick={handleCloseNewsletter}
                  className="w-full px-4 py-2 bg-primary-pink text-white font-bold rounded-full"
                >
                  Subscribe
                </button>
                <button 
                  onClick={handleCloseNewsletter}
                  className="w-full px-4 py-2 text-gray-600"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}