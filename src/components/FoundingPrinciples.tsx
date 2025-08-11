"use client";

import React, { useState } from "react";
import { Plus, Minus, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FoundingPrinciples = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOpen = () => {
    // Capture the current scroll position when opening the modal
    setScrollPosition(window.scrollY);
    setIsOpen(true);
  };

  const principles = [
    "1. Think from First Principles\nDon't copy. Break it down. Rebuild from truth.",
    "2. Focus on First-Order Effects\nSolve for what actually matters. Ignore noise.",
    "3. Simplicity Wins\nIf it's confusing, it won't scale. Make it obvious.",
    "4. Default to Doubt\nQuestion what everyone else accepts. Especially the experts.",
    "5. Speed is Strategy\nShip before you're ready. Learn in public. Fix it live.",
    "6. Data > Opinions\nArgue with proof, not ego. Numbers are louder than titles.",
    "7. Constraints = Power\nSmall teams. Limited time. Tiny budgets. Good. Now build.",
    "8. Break the System\nIf the rules slow you down, rewrite them. Or ignore them.",
    "9. Never Settle for Second-Order Thinking\nNo band-aids. No shortcuts. Solve at the root.",
    "10. Don't Stop. Ever.\nMomentum compounds. When it gets hard, that's the sign you're close."
  ];

  return (
    <>
      {/* Compact View - Terminal Style */}
      <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8 h-full min-h-[250px] sm:min-h-[300px] lg:h-full bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1 group relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="flex flex-col justify-center h-full relative z-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <Terminal className="h-3 sm:h-4 w-3 sm:w-4 text-green-400 mr-2" />
            <h3 className="font-mono font-bold text-green-400 tracking-wider uppercase text-xs sm:text-sm group-hover:text-green-300 transition-colors duration-300">
              $ ./founding_principles
            </h3>
          </div>
          
          {/* Code-style preview */}
          <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            <div className="text-gray-500">{"// Core beliefs that guide us"}</div>
            <div className="flex">
              <span className="text-blue-400 mr-2">1.</span>
              <span className="text-xs sm:text-sm">Think from First Principles</span>
            </div>
            <div className="flex">
              <span className="text-blue-400 mr-2">2.</span>
              <span className="text-xs sm:text-sm">Focus on First-Order Effects</span>
            </div>
            <div className="flex">
              <span className="text-blue-400 mr-2">3.</span>
              <span className="text-xs sm:text-sm">Simplicity Wins</span>
            </div>
            <div className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">{"// Click to view all 10 principles"}</div>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="p-2 sm:p-3 hover:bg-gray-800 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 group-hover:bg-gray-800/50 border border-gray-700 flex-shrink-0"
        >
          <Plus className="h-4 sm:h-5 w-4 sm:w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
        </button>
      </div>

      {/* Modal Overlay - Full Screen Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-[9998] overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <div 
              className="min-h-screen flex items-start justify-center p-2 sm:p-4"
              style={{
                paddingTop: `${Math.max(scrollPosition + 40, 40)}px`,
                paddingBottom: '40px'
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gray-900 border border-gray-700 rounded-lg w-full max-w-4xl max-h-[85vh] shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Terminal header bar */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700 bg-gray-800 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-xs sm:text-sm text-gray-400 ml-2 sm:ml-4">founding_principles.txt</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 sm:p-2 hover:bg-gray-700 rounded transition-all duration-200 flex items-center space-x-1 sm:space-x-2"
                >
                  <Minus className="h-3 sm:h-4 w-3 sm:w-4 text-gray-400" />
                  <span className="font-mono text-xs text-gray-400 hidden sm:inline">ESC</span>
                </button>
              </div>

              {/* Scrollable terminal content */}
              <div className="flex-1 overflow-y-auto bg-gray-900 font-mono">
                <div className="p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12 lg:pb-16">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-green-400 text-lg sm:text-xl mb-6 sm:mb-8">
                      <span className="text-gray-500">$ cat</span> founding_principles.txt
                    </div>
                    
                    <div className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 space-y-1">
                      <div>{"# First Order - Core Principles"}</div>
                      <div>{"# Last updated: " + new Date().toLocaleDateString()}</div>
                      <div>{"# These are the beliefs that guide every decision we make"}</div>
                      <div className="hidden sm:block">{"# Raw, opinionated, and uncompromising"}</div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                      {principles.map((principle, index) => {
                        const [title, description] = principle.split('\n');
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="flex items-start space-x-2 sm:space-x-4 text-gray-200 py-2 sm:py-3 hover:bg-gray-800/30 rounded px-1 sm:px-2 transition-all duration-200"
                          >
                            <span className="text-blue-400 font-semibold min-w-[2rem] sm:min-w-[3rem] text-right text-sm sm:text-base mt-1">
                              {title.split('.')[0]}.
                            </span>
                            <div className="flex-1">
                              <div className="text-green-400 font-semibold text-sm sm:text-base lg:text-lg mb-1">
                                {title.split('.')[1].trim()}
                              </div>
                              <div className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                                {description}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 space-y-4 sm:space-y-6">
                      <div className="text-gray-500 text-xs sm:text-sm space-y-2">
                        <div>{"# End of principles"}</div>
                        <div className="text-green-400 mt-4">{'$ echo "Building clarity in chaos"'}</div>
                        <div className="text-gray-300 mt-2">Building clarity in chaos</div>
                      </div>
                      
                      <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs sm:text-sm space-y-2 sm:space-y-3">
                          <div className="text-green-400 font-semibold">About First Order:</div>
                          <div className="leading-relaxed">
                            We think from first principles. We believe in first-order effects, where foundational 
                            truths create ripple impacts that shape everything that follows.
                          </div>
                          <div className="leading-relaxed">
                            A founder's journey is full of chaos—ambiguity, uncertainty, and constant pivoting. 
                            First Order is here to bring some order to the journey. We cut through the noise 
                            with fundamental thinking, creating clarity where others see complexity.
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center pt-6 sm:pt-8">
                        <div className="text-gray-500 text-xs sm:text-sm">
                          {"# Press ESC or click outside to close"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FoundingPrinciples;