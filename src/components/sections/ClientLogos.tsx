"use client";

import React from 'react';

// Using React.FC with className prop for type safety
const MerckLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="60" height="21" viewBox="0 0 60 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.4411 7.21835L8.6701 12.7001L12.4411 18.4001L16.1911 12.7001L12.4411 7.21835ZM12.4411 24.0001V22.0688L20.9011 7.44336H23.0111V24.0001H20.9411V9.38002L13.4111 24.0001H12.4411Z"></path>
    <path d="M18.7311 24.0001V7.44336H20.8411V24.0001H18.7311Z"></path>
    <path d="M16.7811 7.44336H8.08105V5.53003H20.9111V7.44336H24.0011V24.0001H0.00105374V7.44336H3.99105V24.0001H5.92105V7.44336H8.08105V24.0001H9.97105V7.44336H16.7811ZM3.99105 7.44336H2.17105"></path>
  </svg>
);

const DiscordLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="79" height="21" viewBox="0 0 79 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.5035 1.5H25.0435V19.5H21.5035V1.5Z"></path><path d="M37.7499 1.5H41.2899V19.5H37.7499V1.5Z"></path><path d="M28.0285 1.5H34.7685V4.62H31.5085V19.5H28.0285V1.5Z"></path><path d="M44.2514 1.5H50.9914V4.62H47.7314V19.5H44.2514V1.5Z"></path><path d="M60.1884 1.5C64.3084 1.5 67.5684 4.5 67.5684 8.7C67.5684 12.9 64.2184 15.63 60.1884 15.63H55.4284V19.5H51.9484V1.5H60.1884ZM60.1884 12.51C62.5984 12.51 64.0884 10.89 64.0884 8.7C64.0884 6.51 62.5084 4.62 60.1884 4.62H55.4284V12.51H60.1884Z"></path><path d="M11.66 1.5C15.78 1.5 19.04 4.5 19.04 8.7C19.04 12.9 15.69 15.63 11.66 15.63H6.9V19.5H3.42V1.5H11.66ZM11.66 12.51C14.07 12.51 15.56 10.89 15.56 8.7C15.56 6.51 14.07 4.62 11.66 4.62H6.9V12.51H11.66Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M74.2238 10.5C74.2238 15.2283 70.4021 19.05 65.6738 19.05C60.9455 19.05 57.1238 15.2283 57.1238 10.5C57.1238 5.77172 60.9455 1.95 65.6738 1.95C70.4021 1.95 74.2238 5.77172 74.2238 10.5ZM65.6738 16.5C62.5538 16.5 60.0038 13.95 60.0038 10.5C60.0038 7.05 62.5538 4.5 65.6738 4.5C68.7938 4.5 71.3438 7.05 71.3438 10.5C71.3438 13.95 68.7938 16.5 65.6738 16.5Z"></path></svg>
);

const HuelLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="66" height="21" viewBox="0 0 66 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5H3.54V9H10.5V1.5H14.04V19.5H10.5V12.12H3.54V19.5H0V1.5Z"></path><path d="M17.2129 1.5H29.1529V4.62H20.6929V8.64H27.8929V11.76H20.6929V16.38H29.1529V19.5H17.2129V1.5Z"></path><path d="M32.3213 1.5H35.8613V19.5H32.3213V1.5Z"></path><path d="M51.9213 1.5L58.0713 19.5H54.0213L52.7913 15.66H45.7113L44.5113 19.5H40.4313L46.6113 1.5H51.9213ZM49.2513 12.54C49.2513 12.54 47.9013 8.34 47.9013 8.28C47.8713 8.22 47.8413 8.13 47.8413 8.13L47.7813 8.28L46.4313 12.54H49.2513Z"></path><path d="M57.6538 19.5V1.5H65.9938V16.38H61.1338V19.5H57.6538Z"></path></svg>
);

const clients = [
  { name: 'Merck', component: <MerckLogo /> },
  { name: 'Discord', component: <DiscordLogo /> },
  { name: 'Huel', component: <HuelLogo /> },
];

export default function ClientLogos() {
  const allLogos = [...clients, ...clients, ...clients, ...clients];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div className="border-t border-gray-200 py-4 group">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {allLogos.map((client, index) => (
              <div key={index} className="mx-6 flex-shrink-0 flex items-center justify-center h-5 text-gray-400">
                {client.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}