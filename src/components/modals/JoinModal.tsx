"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal = ({ isOpen, onClose }: JoinModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-start lg:items-center justify-center p-4 pt-16 lg:pt-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden max-h-[85vh] lg:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join First Order</h2>
              <p className="text-gray-600">
                We're building <strong>Terminl</strong> — a private AI-powered space for founders to connect, share, and build.
              </p>
            </div>

            {/* Tally Form */}
            <div className="h-[600px] w-full">
              <iframe
                src="https://tally.so/r/3j2JO1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Join First Order Form"
                className="rounded-b-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;
