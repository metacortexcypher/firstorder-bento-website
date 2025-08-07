"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperimentsAndLabs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const experiments = [
    {
      id: 1,
      emoji: "🧳",
      title: "Founders House",
      description: "A hacker house in Hyderabad where a few founders live and build startups on a weekly/monthly rhythm. On weekends, the house opens up: → Cowork with us → Meet founders & investors → Jam on your ideas → Or just hang out if you're stuck and need help",
      status: "Launching Soon",
      tags: ["#irl", "#pilot", "#hyderabad"]
    },
    {
      id: 2,
      emoji: "🚚",
      title: "VibeShip",
      description: "A 4-week online initiative for vibecoders. Anyone who wants to build a business in 4 weeks can join vibeship. It's free. By week 4: you'll have something shipped, a product, first 100/1000 users, maybe even revenue.",
      status: "Next Intake Sept 15th",
      tags: ["#4weeks", "#free", "#cohort"]
    },
    {
      id: 3,
      emoji: "🛜",
      title: "Terminl",
      description: "A tool built by the community, for the community. It helps you discover fellow First Order founders and track your startup's progress, so everyone sees what you're building.",
      status: "Work in Progress",
      tags: ["#community", "#tracking", "#founders"]
    },
    {
      id: 4,
      emoji: "📼",
      title: "Build TV",
      description: "Raw vlogs of founders building in public. No editing. Just chaos.",
      status: "Planning",
      tags: ["#content", "#raw"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Launching Soon": return "bg-green-100 text-green-800 border-green-200";
      case "Next Intake Sept 15th": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Work in Progress": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Planning": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Paused": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/80 to-gray-50/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden h-full flex flex-col">
      {/* Whiteboard/Kanban style background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black/90 tracking-wide mb-2">
            IN PROGRESS
          </h2>
          <p className="text-sm text-gray-600">Current experiments and wild ideas we're building</p>
        </div>

        {/* Horizontal cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 flex-1">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(experiment.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 hover:shadow-md hover:border-gray-300 transition-all duration-200 group"
            >
              {/* Header with emoji and status */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{experiment.emoji}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {experiment.title}
                  </h3>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(experiment.status)}`}>
                  {experiment.status}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {experiment.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {experiment.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Wanna contribute or collab on one?
            </p>
            <button className="flex items-center space-x-2 text-sm font-medium text-black hover:text-gray-700 transition-colors group">
              <span>DM us on Telegram</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}