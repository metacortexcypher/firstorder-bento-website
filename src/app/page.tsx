"use client";

import { useState } from 'react';
import FoundingPrinciples from '@/components/FoundingPrinciples';
import { VibesBox } from '@/components/VibesBox';
import ExperimentsAndLabs from '@/components/ExperimentsLabs';
import FounderMemo from '@/components/FounderMemo';
import LogosMarquee from '@/components/LogosMarquee';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Left Column - 40% */}
        <div className="w-[40vw] h-screen flex flex-col border-r border-gray-200 p-4">
          {/* Container for both Jordan Jenkins and Based in NYC boxes */}
          <div className="h-full flex flex-col gap-4">
            {/* Minimal Navigation */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-lg font-bold text-gray-900">
                    First Order
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm"
                  >
                    Join
                  </a>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
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
            {/* Spotify Widget - First Order Vibes */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl border border-green-200/30 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-700 font-semibold">First Order Vibes</p>
                    <p className="text-gray-500 text-xs">Building startup culture</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-2.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Spotify Player - First Order Playlist */}
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://open.spotify.com/embed/playlist/2LizBjcoZLbTeukWob3Myv?utm_source=generator&autoplay=1&theme=0" 
                  width="100%" 
                  height="232" 
                  frameBorder="0" 
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
              </div>
            </div>

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
    </div>
  );
}