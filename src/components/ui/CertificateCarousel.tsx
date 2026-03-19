"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/experience";

// Import certificate assets directly so they're bundled into the card
import AlgoCert from '../../../public/assets/Certificates/Algo.png';
import IxCert from '../../../public/assets/Certificates/Ix.png';

export default function CertificateCarousel() {
  // Start with explicitly imported certificate assets
  const imported = [
    { src: AlgoCert as unknown as string, title: 'AlgoXplore 1.0' },
    { src: IxCert as unknown as string, title: 'IX 24 Inter-University Designathon' },
  ];

  // Add any images referenced in certifications data (avoid duplicates)
  const dataImages = certifications
    .filter(c => c.image)
    .map(c => ({ src: c.image!, title: c.name }));

  const all = [...imported, ...dataImages];
  const uniq: { src: string; title: string }[] = [];
  const seen = new Set<string>();
  for (const it of all) {
    if (!seen.has(it.src)) {
      seen.add(it.src);
      uniq.push(it);
    }
  }

  const certImages = uniq;

  const [index, setIndex] = useState(0);

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
          <motion.img
            key={index}
            src={certImages[index].src}
            alt={certImages[index].title}
            className="w-full h-52 sm:h-64 object-cover bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          />
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
