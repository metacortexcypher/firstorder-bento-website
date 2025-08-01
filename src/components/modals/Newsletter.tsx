"use client";

import { useState } from 'react';

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current"
  >
    <path d="M11 1L1 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 1L11 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current"
  >
    <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface NewsletterProps {
  onClose: () => void;
}

export default function Newsletter({ onClose }: NewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle newsletter subscription
    console.log(`Subscribing with: ${email}`);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 sm:inset-auto sm:bottom-8 sm:right-8">
      <div className="relative mx-auto w-full max-w-sm rounded-2xl bg-black p-6 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close newsletter"
        >
          <CloseIcon />
        </button>

        <p className="mr-8 text-lg leading-snug">
          Join my newsletter to get updates on new projects and happenings.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 flex items-center overflow-hidden rounded-full bg-white p-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full flex-grow bg-transparent px-4 py-2 text-sm text-black placeholder:text-[var(--color-gray-400)] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-[var(--color-primary-pink)] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <span>Subscribe</span>
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}