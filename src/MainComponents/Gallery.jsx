import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import all 20 images from src/assets/
import logo from '../assets/logo.jpeg';
import mary2 from '../assets/mary2.jpeg';
import priest from '../assets/priest.jpeg';
import mary1 from '../assets/mary1.jpeg';

// Define all 20 images with their metadata
const galleryImages = [
  { id: 'img-1', src: logo, alt: 'Church service' },
  { id: 'img-2', src: mary2, alt: 'Sunday mass' },
  { id: 'img-3', src: priest, alt: 'Sunday mass' },
  { id: 'img-4', src: mary1, alt: 'Sunday mass' },
  
  
];

const Gallery = () => {
  const controls = useAnimation();
  const galleryRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const intervalRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || !trackRef.current) return;

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = (prev + 1) % galleryImages.length;
          scrollToImage(nextIndex);
          return nextIndex;
        });
      }, 3000);
    };

    const scrollToImage = (index) => {
      const track = trackRef.current;
      if (!track) return;
      
      const itemWidth = track.children[0]?.offsetWidth || 0;
      const gap = 24;
      track.scrollTo({
        left: index * (itemWidth + gap),
        behavior: 'smooth'
      });
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  // Handle scroll to update current index
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollPosition = track.scrollLeft;
      const itemWidth = track.children[0]?.offsetWidth || 0;
      const gap = 24;
      const newIndex = Math.round(scrollPosition / (itemWidth + gap));
      setCurrentIndex(newIndex);
    };

    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  // Start animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div id='gallery' className="bg-white py-12 px-4 overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        Parish Gallery
      </motion.h1>

      <div 
        ref={galleryRef} 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sliding Track */}
        <motion.div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, when: "beforeChildren" }
            }
          }}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="flex-shrink-0 w-64 h-80 sm:w-72 sm:h-96 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
              style={{ scrollSnapAlign: 'start' }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { 
                    duration: 0.5, 
                    ease: "easeOut",
                    delay: index * 0.05 
                  }
                }
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 gap-2">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => {
              setCurrentIndex(index);
              const track = trackRef.current;
              if (track) {
                const itemWidth = track.children[0]?.offsetWidth || 0;
                const gap = 24;
                track.scrollTo({
                  left: index * (itemWidth + gap),
                  behavior: 'smooth'
                });
              }
            }}
            className="w-3 h-3 rounded-full focus:outline-none"
            aria-label={`Go to image ${index + 1}`}
          >
            <motion.div
              className="w-full h-full rounded-full"
              initial={{ backgroundColor: '#D1D5DB' }}
              animate={{ 
                backgroundColor: currentIndex === index ? '#3B82F6' : '#D1D5DB',
                scale: currentIndex === index ? 1.2 : 1
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;