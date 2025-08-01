"use client";

import React, { useState } from "react";
import { Plus, Minus, Lightbulb, Rocket, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Backstory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const milestones = [
    {
      year: "2023",
      title: "The Spark",
      icon: <Lightbulb className="h-5 w-5" />,
      description: "It started with a simple observation: founders were drowning in noise. Too many frameworks, too much advice, not enough fundamental thinking."
    },
    {
      year: "2024",
      title: "First Principles",
      icon: <Rocket className="h-5 w-5" />,
      description: "We began building a methodology around first principles thinking, helping founders cut through the chaos to find clarity in their decision-making."
    },
    {
      year: "2025",
      title: "Community First",
      icon: <Heart className="h-5 w-5" />,
      description: "Today, we're more than just a methodology. We're a community of builders who believe in the power of fundamental thinking to create lasting impact."
    }
  ];

  return (
    <>
      {/* Compact View */}
      <div className="flex items-center justify-between p-6 h-40 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 ease-in-out hover:-translate-y-1 group">
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center mb-2">
            <Heart className="h-4 w-4 text-amber-600 mr-2" />
            <h3 className="font-bold text-black tracking-wider uppercase text-sm group-hover:text-amber-800 transition-colors duration-300">
              OUR STORY
            </h3>
          </div>
          <p className="text-black text-sm leading-relaxed max-w-sm group-hover:text-amber-700 transition-colors duration-300">
            How we started, where we're going, and why we believe in building from first principles.
          </p>
          <div className="mt-2 text-xs text-amber-600 font-medium">
            From chaos to clarity • Founded 2023
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 hover:bg-amber-100 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 group-hover:bg-amber-50"
        >
          <Plus className="h-5 w-5 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto max-h-[80vh]">
                <div className="p-8 space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-bold text-black text-3xl tracking-[-0.02em] mb-2">
                        The First Order Story
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Building clarity in the chaos of creation
                      </p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                    >
                      <Minus className="h-4 w-4 text-black" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        First Order was born from a simple frustration: the founder journey had become 
                        overwhelmingly complex. Everywhere you looked, there were new frameworks, 
                        methodologies, and "proven strategies" that promised success but delivered confusion.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We believe the best solutions come from thinking clearly about fundamental problems. 
                        Not from following the latest trend or copying what worked for someone else, 
                        but from understanding the core principles that drive real outcomes.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-black mb-4">Our Journey</h3>
                      
                      {milestones.map((milestone, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                            {milestone.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded">
                                {milestone.year}
                              </span>
                              <h4 className="font-semibold text-black">
                                {milestone.title}
                              </h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
                        <h3 className="font-semibold text-black mb-2">What's Next?</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          We're just getting started. Our vision is to create a new kind of founder community—one 
                          that values depth over breadth, principles over tactics, and long-term thinking over quick fixes.
                        </p>
                        <div className="flex items-center space-x-4">
                          <button className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
                            Join Our Journey
                          </button>
                          <button className="px-4 py-2 border border-amber-300 text-amber-700 text-sm font-medium rounded-lg hover:bg-amber-50 transition-colors duration-200">
                            Learn More
                          </button>
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

export default Backstory;
