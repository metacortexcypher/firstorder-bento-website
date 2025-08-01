"use client";

import React, { useState } from "react";
import { Plus, Minus, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FoundingPrinciples = () => {
  const [isOpen, setIsOpen] = useState(false);

  const principles = [
    "Think from first principles, not by analogy",
    "Simplicity is the ultimate sophistication", 
    "Build for clarity, not complexity",
    "Question everything, assume nothing",
    "Focus on first-order effects",
    "Ship fast, iterate faster",
    "Data beats opinions",
    "Constraints breed creativity",
    "We strive for first-order effects in everything",
    "If the system doesn't help, bend it or break it",
    "Do what you have to, but don't give up"
  ];

  return (
    <>
      {/* Compact View - Terminal Style */}
      <div className="flex items-center justify-between p-8 h-[50vh] bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1 group relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="flex flex-col justify-center h-full relative z-10">
          <div className="flex items-center mb-4">
            <Terminal className="h-4 w-4 text-green-400 mr-2" />
            <h3 className="font-mono font-bold text-green-400 tracking-wider uppercase text-sm group-hover:text-green-300 transition-colors duration-300">
              $ ./founding_principles
            </h3>
          </div>
          
          {/* Code-style preview */}
          <div className="font-mono text-sm space-y-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            <div className="text-gray-500">{"// Core beliefs that guide us"}</div>
            <div className="flex">
              <span className="text-blue-400 mr-2">1.</span>
              <span>Think from first principles</span>
            </div>
            <div className="flex">
              <span className="text-blue-400 mr-2">2.</span>
              <span>Build for clarity, not complexity</span>
            </div>
            <div className="flex">
              <span className="text-blue-400 mr-2">3.</span>
              <span>Ship fast, iterate faster</span>
            </div>
            <div className="text-gray-500 mt-2">{"// Click to view all 11 principles"}</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 hover:bg-gray-800 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 group-hover:bg-gray-800/50 border border-gray-700"
        >
          <Plus className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
        </button>
      </div>

      {/* Modal Overlay - Full Screen Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-900 border border-gray-700 rounded-lg w-full max-w-4xl h-full max-h-[90vh] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal header bar */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-sm text-gray-400 ml-4">founding_principles.txt</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-200 flex items-center space-x-2"
                >
                  <Minus className="h-4 w-4 text-gray-400" />
                  <span className="font-mono text-xs text-gray-400">ESC</span>
                </button>
              </div>

              {/* Scrollable terminal content */}
              <div className="h-full overflow-y-auto bg-gray-900 font-mono">
                <div className="p-8 pb-16">
                  <div className="space-y-6">
                    <div className="text-green-400 text-xl mb-8">
                      <span className="text-gray-500">$ cat</span> founding_principles.txt
                    </div>
                    
                    <div className="text-gray-500 text-sm mb-8 space-y-1">
                      <div>{"# First Order - Core Principles"}</div>
                      <div>{"# Last updated: " + new Date().toLocaleDateString()}</div>
                      <div>{"# These are the beliefs that guide every decision we make"}</div>
                      <div>{"# Raw, opinionated, and uncompromising"}</div>
                    </div>
                    
                    <div className="space-y-4 mb-12">
                      {principles.map((principle, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 }}
                          className="flex items-start space-x-4 text-gray-200 py-2 hover:bg-gray-800/30 rounded px-2 transition-all duration-200"
                        >
                          <span className="text-blue-400 font-semibold min-w-[3rem] text-right">
                            {String(index + 1).padStart(2, '0')}.
                          </span>
                          <span className="text-gray-200 leading-relaxed text-lg">
                            {principle}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-700 space-y-6">
                      <div className="text-gray-500 text-sm space-y-2">
                        <div>{"# End of principles"}</div>
                        <div className="text-green-400 mt-4">{'$ echo "Building clarity in chaos"'}</div>
                        <div className="text-gray-300 mt-2">Building clarity in chaos</div>
                      </div>
                      
                      <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-sm space-y-3">
                          <div className="text-green-400 font-semibold">About First Order:</div>
                          <div>
                            We think from first principles. We believe in first-order effects, where foundational 
                            truths create ripple impacts that shape everything that follows.
                          </div>
                          <div>
                            A founder's journey is full of chaos—ambiguity, uncertainty, and constant pivoting. 
                            First Order is here to bring some order to the journey. We cut through the noise 
                            with fundamental thinking, creating clarity where others see complexity.
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center pt-8">
                        <div className="text-gray-500 text-sm">
                          {"# Press ESC or click outside to close"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FoundingPrinciples;