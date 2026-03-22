"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateCarousel() {
  // Only use images from public/assets/Certificates (served from /assets/...)
  const certImages = [
    { src: '/assets/Certificates/Algo.png', title: 'AlgoXplore 1.0' },
    { src: '/assets/Certificates/Ix.png', title: 'IX 24 Inter-University Designathon' },
    { src: '/assets/Certificates/Socs.jpg', title: 'SOCs Certificate' },
    { src: '/assets/Certificates/ICMR.jpeg', title: 'ICMR Certificate' },
    { src: '/assets/Certificates/Bi.jpeg', title: 'Microsoft Power Business Intelligence Certificate' },
  ];

  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const direction = index >= prevIndex.current ? 1 : -1;
  
  useEffect(() => {
    prevIndex.current = index;
  }, [index]);

  useEffect(() => {
    if (!certImages.length) return;
    const id = setInterval(() => setIndex(i => (i + 1) % certImages.length), 3500);
    return () => clearInterval(id);
  }, [certImages.length]);

  if (!certImages.length) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg bg-black/30">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 * direction, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50 * direction, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-900"
          >
            <img
              src={certImages[index].src}
              alt={certImages[index].title}
              className="w-full h-auto max-h-[48vh] sm:max-h-[60vh] object-contain mx-auto"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {certImages.map((p, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-acid-lime' : 'bg-white/60'}`}
              aria-label={`Show certificate ${i + 1}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
