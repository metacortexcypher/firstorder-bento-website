"use client";

import React, { useState, useEffect } from 'react';
import { MotionDiv } from '@/components/ui/motion';

const FoundingPrinciples = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Founding Principles</h3>
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Crafting digital experiences that merge aesthetics with functionality
        </p>
        <div className="flex flex-col space-y-2">
          <span className="text-xs uppercase tracking-wide text-gray-500">Principles</span>
          <div className="space-y-1 text-sm">
            <div>• Clean design systems</div>
            <div>• User-centered approach</div>
            <div>• Sustainable development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VibesBox = () => {
  const images = [
    { id: 1, color: 'bg-pink-100', text: 'Bold' },
    { id: 2, color: 'bg-gray-100', text: 'Minimal' },
    { id: 3, color: 'bg-black', text: 'Clean', textColor: 'text-white' }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Visual Vibe</h3>
      <div className="relative h-32 overflow-hidden rounded-md">
        {images.map((image, index) => (
          <MotionDiv
            key={image.id}
            className={`absolute inset-0 ${image.color} flex items-center justify-center transition-opacity duration-500`}
            style={{
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            <span className={`text-2xl font-bold ${image.textColor || 'text-black'}`}>
              {image.text}
            </span>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

const ProjectPlaceholder = ({ title, subtitle, number }: { title: string, subtitle: string, number: number }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        <span className="text-sm text-gray-500">0{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

const ExperimentsLabs = () => {
  const experiments = [
    { title: 'Motion Study', status: 'Active' },
    { title: 'Prototyping', status: 'New' },
    { title: 'UI Toolkit', status: 'Beta' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Experiments & Labs</h3>
      <div className="space-y-3">
        {experiments.map((experiment, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
            <span className="text-sm font-medium">{experiment.title}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              experiment.status === 'New' ? 'bg-pink-100 text-pink-700' :
              experiment.status === 'Active' ? 'bg-green-100 text-green-700' :
              'bg-blue-100 text-blue-700'
            }`}>
              {experiment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectBoxes = () => {
  return (
    <div className="w-full h-full">
      <div className="space-y-6">
        <FoundingPrinciples />
        <VibesBox />
        <ProjectPlaceholder 
          title="First Project" 
          subtitle="Digital brand identity and web experience design" 
          number={1}
        />
        <ProjectPlaceholder 
          title="Second Project" 
          subtitle="Mobile-first design system implementation" 
          number={2}
        />
        <ProjectPlaceholder 
          title="Third Project" 
          subtitle="Creative direction for product launch campaign" 
          number={3}
        />
        <ExperimentsLabs />
        <ProjectPlaceholder 
          title="Fourth Project" 
          subtitle="Experimental interface design concepts" 
          number={4}
        />
      </div>
    </div>
  );
};