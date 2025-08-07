"use client";

import React, { useState } from "react";
import { FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FounderMemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const memoContent = `2:17 AM

can't sleep again. been thinking about this whole "startup ecosystem" thing and how broken it feels sometimes.

everyone's obsessed with the same playbooks. same frameworks. same "growth hacks." but the founders who actually change the world? they don't follow playbooks. they think from scratch.

watched another founder today get completely lost in someone else's advice about product-market fit when they hadn't even figured out what problem they're actually solving. it's like... we're all playing telephone with wisdom that was specific to one company, one moment, one context.

what if we just... stopped?

what if instead of optimizing for metrics someone else picked, we optimized for clarity? what if instead of copying successful patterns, we understood the principles behind them?

building first order feels like swimming upstream sometimes. people want the quick fix, the template, the blueprint. but the best founders i know? they built their own blueprints.

the world doesn't need another accelerator program teaching the same curriculum. it needs a space where builders can think clearly, without the noise.

maybe that's naive. maybe i'm overthinking this at 2am again.

but every time i talk to a founder who's been through the traditional path and comes out the other side feeling empty, or worse, having built something they don't even believe in... i think we're onto something.

this isn't about being contrarian for the sake of it. it's about being honest about what actually works when you strip away all the performative bullshit.

anyway. probably should try to sleep.

but first - reminder to self: the community is everything. the methodology is just a tool. the real magic happens when builders find other builders who think like them.

don't let this become another thing people follow blindly. keep it raw. keep it real. keep it first principles.

---

oh and note: need to build a startup ecosystem from the scratch. call everyone in the ecosystem and ask for help shamelessly.

also: why does every startup blog sound the same? we should write more like this. more human. more honest. more "i don't have all the answers but here's what i'm seeing."

k done rambling. 

sleep now.

maybe.`;

  return (
    <>
      {/* Compact View - Minimalistic Design */}
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center justify-between p-8 h-40 bg-white border border-orange-100/60 hover:border-orange-200/80 rounded-2xl transition-all duration-400 ease-out hover:-translate-y-1 cursor-pointer overflow-hidden"
      >
        {/* Subtle colored gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-amber-50/20 to-yellow-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
        
        {/* Subtle colored accent border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-200/20 via-amber-200/20 to-yellow-200/20 p-px">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        
        <div className="relative flex flex-col justify-center h-full space-y-3 z-10">
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            <h3 className="font-semibold text-gray-900 text-sm tracking-wide">
              Memo from the Founder
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-normal">
            Raw thoughts, late-night rants, and honest reflections on building something different.
          </p>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>Unfiltered</span>
            <div className="w-1 h-1 bg-orange-300/60 rounded-full"></div>
            <span>2:17 AM</span>
          </div>
        </div>
        
        {/* Enhanced icon with colored background */}
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100/60 rounded-2xl flex items-center justify-center group-hover:from-orange-100 group-hover:to-amber-100 group-hover:border-orange-200/80 transition-all duration-300">
            <FileText className="w-5 h-5 text-orange-400 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
        </div>
        
        {/* Enhanced accent line with gradient */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-yellow-50 w-full max-w-4xl h-[90vh] rounded-lg shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    transparent,
                    transparent 31px,
                    rgba(59, 130, 246, 0.1) 32px,
                    rgba(59, 130, 246, 0.1) 32px
                  )
                `,
                backgroundSize: '100% 32px'
              }}
            >
              {/* Paper header with red margin line */}
              <div className="absolute top-0 left-12 w-0.5 h-full bg-red-300/60"></div>
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="h-full overflow-y-auto p-8 pl-20">
                <div className="max-w-3xl">
                  <pre className="font-mono text-sm leading-relaxed text-gray-800 whitespace-pre-wrap break-words">
                    {memoContent}
                  </pre>
                </div>
              </div>

              {/* Paper shadows/effects */}
              <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FounderMemo;
