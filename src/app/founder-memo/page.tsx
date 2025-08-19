"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface MemoPost {
  id: string;
  title: string;
  date: string;
  content: string[];
}

const memoPosts: MemoPost[] = [
  {
    id: "late-night-thoughts",
    title: "Late Night Thoughts",
    date: "August 2024",
    content: [
      "It's 2:47 AM. Can't sleep.",
      "",
      "Been thinking about this whole startup ecosystem thing. Everyone's playing the same game, following the same playbook, chasing the same metrics.",
      "",
      "VCs want to see hockey stick growth. Founders fake it till they make it. Communities become echo chambers where everyone just... agrees with each other.",
      "",
      "Where's the real talk? Where are the founders who admit they're struggling? Where's the community that actually helps instead of just... networking?",
      "",
      "I started Frag Club because I was tired of the BS. 800+ founders joined in a month through pure word of mouth. No growth hacking, no viral loops, just founders finding other founders who gave a damn.",
      "",
      "But even that felt too structured after a while.",
      "",
      "So here we are. First Order. A reset. A chance to build something different.",
      "",
      "Not another founder community. Not another networking group.",
      "",
      "A space for builders who think from first principles. Who question everything, especially the things everyone else accepts as truth.",
      "",
      "Maybe this works. Maybe it doesn't.",
      "",
      "But at least we're building something real.",
      "",
      "—Sriharsha",
      "Founder, First Order"
    ]
  },
  {
    id: "building-terminl",
    title: "Building Terminl",
    date: "July 2024", 
    content: [
      "Everyone talks about AI changing everything.",
      "",
      "But most AI tools feel like... party tricks.",
      "",
      "We're building Terminl differently. It's not about automating tasks or generating content.",
      "",
      "It's about understanding what founders actually need. And connecting them to the right people at the right time.",
      "",
      "Imagine typing 'I need feedback on my pricing strategy' and getting connected to 3 founders who've solved similar problems. Not through some algorithm that matches keywords, but through AI that actually understands context, intent, and timing.",
      "",
      "That's what we're building.",
      "",
      "Still early. Still figuring it out.",
      "",
      "But the vision is clear: technology should bring people together, not replace human connection.",
      "",
      "—Sriharsha"
    ]
  },
  {
    id: "why-first-principles",
    title: "Why First Principles?",
    date: "June 2024",
    content: [
      "First principles thinking isn't just a buzzword.",
      "",
      "It's the difference between copying what works and understanding WHY it works.",
      "",
      "Most founders I meet are playing follow-the-leader. They see a successful company and try to replicate their strategy, their metrics, their growth tactics.",
      "",
      "But they never ask: what were the core assumptions? What was the unique context? What fundamental truths drove those decisions?",
      "",
      "When you strip away all the noise and get to the foundational truths, you can build something genuinely different.",
      "",
      "That's what First Order is about.",
      "",
      "Not just another community following the playbook.",
      "",
      "A space for founders who want to write their own.",
      "",
      "—Sriharsha"
    ]
  },
  {
    id: "hyderabad-hustle",
    title: "The Hyderabad Hustle",
    date: "May 2024",
    content: [
      "Hyderabad isn't Silicon Valley.",
      "",
      "And that's exactly why it's interesting.",
      "",
      "No fancy co-working spaces with kombucha on tap. No networking events where everyone's trying to out-jargon each other.",
      "",
      "Just builders. Building.",
      "",
      "The founders here are different. They're not playing for TechCrunch headlines or demo day glory.",
      "",
      "They're solving real problems for real people with real constraints.",
      "",
      "Limited budgets. Small teams. No safety net.",
      "",
      "It forces you to be creative. To be resourceful. To think from first principles because you can't afford to copy expensive solutions.",
      "",
      "That's the energy we want to capture in First Order.",
      "",
      "Not the Silicon Valley circus.",
      "",
      "The Hyderabad hustle.",
      "",
      "—Sriharsha"
    ]
  }
];

export default function FounderMemoPage() {
  const [selectedPost, setSelectedPost] = useState<MemoPost | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 border-b border-green-900 pb-4">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back to posts</span>
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-green-300">
                {selectedPost.title}
              </h1>
              <div className="text-sm text-green-600 mt-2 sm:mt-0">
                {selectedPost.date}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 leading-relaxed">
            {selectedPost.content.map((line, index) => (
              <div key={index} className="min-h-[1.5rem]">
                {line === "" ? (
                  <div className="h-4" />
                ) : (
                  <p className="text-green-400">{line}</p>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-green-900">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back to first order</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-b border-green-900 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-300">
              Memo from the Founder
            </h1>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-green-500 hover:text-green-300 transition-colors mt-4 sm:mt-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back to first order</span>
            </Link>
          </div>
          <p className="text-green-600 mt-2">Raw thoughts from the trenches</p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {memoPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="border border-green-900 bg-gray-900/30 p-6 cursor-pointer hover:border-green-700 hover:bg-gray-900/50 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-green-300 group-hover:text-green-200 transition-colors">
                  {post.title}
                </h2>
                <div className="text-sm text-green-600 mt-2 sm:mt-0">
                  {post.date}
                </div>
              </div>
              
              <div className="text-green-500 text-sm">
                {post.content.slice(0, 3).map((line, index) => (
                  <p key={index} className={line === "" ? "h-4" : ""}>
                    {line}
                  </p>
                ))}
                <p className="text-green-600 mt-2">Click to read more...</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-green-900 text-center">
          <p className="text-green-600 text-sm">
            These are raw, unfiltered thoughts. No PR speak, no corporate messaging.
          </p>
          <p className="text-green-600 text-sm mt-2">
            Just a founder figuring it out one day at a time.
          </p>
        </div>
      </div>
    </div>
  );
}