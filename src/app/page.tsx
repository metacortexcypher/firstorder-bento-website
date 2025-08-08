"use client";

import { useState } from 'react';
import FoundingPrinciples from '@/components/FoundingPrinciples';
import { VibesBox } from '@/components/VibesBox';
import ExperimentsAndLabs from '@/components/ExperimentsLabs';
import FounderMemo from '@/components/FounderMemo';
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
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm px-3 sm:px-4 py-2 h-[60px] flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="text-base sm:text-lg font-bold text-gray-900">
                    First Order
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="px-2 sm:px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm cursor-pointer touch-manipulation"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
            
            {/* Top Box - Main Brand - Now takes full height minus navigation */}
            <div className="flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-0 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
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
                    We're building our own for the founders.
                  </p>
                </div>
                
                {/* Join the resistance button */}
                <div className="mt-6 sm:mt-8">
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-sm sm:text-base font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-2xl hover:shadow-black/50 transform hover:scale-105 border-2 border-gray-700 hover:border-gray-600 relative overflow-hidden cursor-pointer touch-manipulation"
                    style={{
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Join the resistance
                  </button>
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
            {/* Social Links - Above founder memo on larger screens */}
            <div className="hidden lg:block">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-4 flex items-center justify-between h-[60px]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-full hover:bg-blue-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                      X
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-medium">Built from Hyderabad ❤️</p>
                </div>
              </div>
            </div>

            {/* Founder Memo - Top of right column on larger screens */}
            <div className="hidden lg:block h-[160px]">
              <FounderMemo />
            </div>

            {/* Row 1 - Founding Principles and Vibes Box - Stack on mobile, side by side on desktop */}
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-[400px] lg:h-[380px]">
              <div className="w-full lg:w-[60%] h-full">
                <FoundingPrinciples />
              </div>
              <div className="w-full lg:w-[35%] h-full">
                <VibesBox />
              </div>
            </div>

            {/* Video Section - Hux v1 */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 relative overflow-hidden h-[350px] flex flex-col">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Act 1: Bring order to the chaos</h3>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden bg-gray-100 flex-1">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-2xl"
                      preload="metadata"
                    >
                      <source src="/hux v1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Experiments and Labs */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1 h-[1000px] md:h-[700px]">
                <ExperimentsAndLabs />
              </div>
            </div>

            {/* Row 3 - FAQ Section */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="col-span-1">
                <FAQSection />
              </div>
            </div>

            {/* Mobile Social Links - Only visible on mobile */}
            <div className="sm:hidden pt-6 border-t border-gray-200">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-4">
                <div className="text-center space-y-3">
                  <div className="flex justify-center space-x-2">
                    <a
                      href="#"
                      className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-full hover:bg-blue-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                      X
                    </a>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Built from Hyderabad ❤️</p>
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