"use client";

import React from "react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Image from "next/image";

export const LumaCalendar = () => {
  const handleClick = () => {
    window.open("https://lu.ma/6izi44s2", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden relative"
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      
      <div className="flex relative z-10">
        {/* Left side - Image */}
        <div className="w-48 h-64 relative overflow-hidden rounded-l-2xl">
          <Image
            src="/fun.jpg"
            alt="NYC Community Event"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20"></div>
          
          {/* External link icon overlay */}
          <div className="absolute top-3 right-3">
            <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
              <ExternalLink className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="flex-1 p-6">
          {/* Date badge with glass effect */}
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 px-4 py-2 mb-4 shadow-lg">
            <Calendar className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-gray-900">Ongoing Events</span>
          </div>
          
          {/* Event title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
            First Order NYC Community
          </h3>
          
          {/* Event description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Join our vibrant community of founders, builders, and creators in NYC. Weekly meetups, workshops, and networking events for startup enthusiasts.
          </p>
          
          {/* Event details */}
          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-purple-500" />
              <span className="font-medium">New York City</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              <span className="font-medium">250+ members</span>
            </div>
          </div>
          
          {/* Host info and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">FO</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">First Order</p>
                <p className="text-xs text-gray-500">Event Host</p>
              </div>
            </div>
            
            {/* Join button with glass effect */}
            <div className="bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm font-semibold group-hover:bg-black transition-all duration-300 shadow-lg border border-white/10">
              View Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumaCalendar;
