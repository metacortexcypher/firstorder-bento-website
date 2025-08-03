"use client";

import { useState } from 'react';
import FoundingPrinciples from '@/components/FoundingPrinciples';
import { VibesBox } from '@/components/VibesBox';
import ExperimentsAndLabs from '@/components/ExperimentsLabs';
import FounderMemo from '@/components/FounderMemo';
import LogosMarquee from '@/components/LogosMarquee';
import JoinModal from '@/components/modals/JoinModal';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100" style={{ contain: 'layout', overscrollBehavior: 'contain' }}>
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-gray-100 overflow-hidden">
        {/* Left Column - Mobile: full width, Desktop: 40% */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-screen flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 p-3 sm:p-4">
          {/* Container for navigation and boxes */}
          <div className="h-full flex flex-col gap-3 sm:gap-4">
            {/* Minimal Navigation */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm px-3 sm:px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-base sm:text-lg font-bold text-gray-900">
                    First Order
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="px-2 sm:px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm"
                  >
                    Join
                  </button>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Top Box - Main Brand - 70% of container */}
            <div className="flex-[7] min-h-[300px] sm:min-h-[400px] lg:min-h-0 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: "url('/firstbox.png')" }}
              ></div>
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
              
              <div className="w-full relative z-10">
                <h1 className="font-bold text-white text-[8vw] sm:text-[6vw] lg:text-[4.5vw] leading-[0.85] tracking-[-0.02em] mb-4 sm:mb-6 drop-shadow-lg">
                  A New Order Begins
                </h1>
                <div className="space-y-1">
                  <p className="text-white text-sm sm:text-base lg:text-lg leading-snug drop-shadow-lg font-semibold">
                    We're not fixing the old system.
                  </p>
                  <p className="text-white text-sm sm:text-base lg:text-lg leading-snug drop-shadow-lg font-semibold">
                    We're building a new world for startup founders.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - Split into 2 boxes - 30% of container - Hidden on mobile, shown at end */}
            <div className="hidden sm:flex flex-[3] flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Community Box - Left */}
              <div className="flex-1 min-h-[120px] bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <p className="text-xs text-gray-600 mb-2 sm:mb-3 font-medium">Join First Order Community</p>
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Social & Location Box - Right */}
              <div className="flex-1 min-h-[120px] bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-md"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-2 sm:mb-3">
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

        {/* Founder Memo - Mobile only, appears right after hero section */}
        <div className="block lg:hidden w-full border-b border-gray-200 p-3 sm:p-4">
          <FounderMemo />
        </div>

        {/* Right Column - Mobile: full width, Desktop: 60% */}
        <div className="w-full lg:w-[60vw] h-auto lg:h-screen bg-gray-100 right-column-scroll">
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Founder Memo - Top of right column on larger screens */}
            <div className="hidden lg:block">
              <FounderMemo />
            </div>

            {/* Row 1 - Founding Principles and Vibes Box - Stack on mobile, side by side on desktop */}
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:h-[50vh]">
              <div className="w-full lg:w-[60%] min-h-[300px] lg:h-full">
                <FoundingPrinciples />
              </div>
              <div className="w-full lg:w-[35%] min-h-[200px] sm:min-h-[250px] lg:h-full">
                <VibesBox />
              </div>
            </div>

            {/* Row 1.5 - Scrolling Logos Marquee */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1">
                <LogosMarquee />
              </div>
            </div>

            {/* Row 2 - Experiments and Labs */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1">
                <ExperimentsAndLabs />
              </div>
            </div>

            {/* Row 3 - FAQ Section */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1">
                <FAQSection />
              </div>
            </div>

            {/* Mobile Community & Social Boxes - Only visible on mobile */}
            <div className="sm:hidden flex flex-col gap-3 pt-6 border-t border-gray-200">
              {/* Community Box - Mobile */}
              <div className="min-h-[120px] bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Join First Order Community</p>
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="inline-block px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Social & Location Box - Mobile */}
              <div className="min-h-[120px] bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 flex flex-col justify-center relative overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* Subtle animated background elements */}
                <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-md"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-2">
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
      </div>

      {/* Join Modal */}
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}