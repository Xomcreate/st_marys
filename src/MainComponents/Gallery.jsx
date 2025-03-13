import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images and video from your assets folder
import mary1 from '../assets/mary1.jpeg';
import mary2 from '../assets/mary2.jpeg';
import vid1 from '../assets/vid1.mp4';

// Updated media data including imported images and video
const slides = [
  { src: mary1, title: 'Mary Image 1' },
  { src: mary2, title: 'Mary Image 2' },
  { src: vid1, title: 'Praying Video' },
  { src: 'https://via.placeholder.com/800x400?text=Image+2', title: 'Sunset Over the Hills' },
  { src: 'https://via.placeholder.com/800x400?text=Image+3', title: 'City Lights' },
  { src: 'https://via.placeholder.com/800x400?text=Image+4', title: 'Forest Path' },
];

function Gallery() {
  // Calculate the total number of pairs
  const totalPairs = Math.ceil(slides.length / 2);
  const [current, setCurrent] = useState(0);

  // Auto-advance to next pair every 5 seconds (slower transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPairs);
    }, 5000); // Increased interval duration
    return () => clearInterval(interval);
  }, [totalPairs]);

  // Variants for sliding transition (applied to the container of the pair)
  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // Extract the current pair of slides
  const currentPair = slides.slice(current * 2, current * 2 + 2);

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Parish Gallery</h1>
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }} // Slower transition (1s)
            className="grid grid-cols-2 gap-8 w-full px-8"
          >
            {currentPair.map((slide, index) => (
              <div
                key={index}
                className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                {typeof slide.src === 'string' && slide.src.endsWith('.mp4') ? (
                  <video
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                  {slide.title}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Gallery;