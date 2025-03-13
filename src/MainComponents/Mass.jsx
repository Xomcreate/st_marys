import React from 'react';
import { motion } from 'framer-motion';

function Mass() {
  const leftAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
    viewport: { once: false }
  };

  const rightAnimation = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
    viewport: { once: false }
  };

  return (
    <div id="mass-schedule" className="bg-blue-800 h-auto md:h-[55vh] w-full p-4 overflow-hidden">
      {/* Title */}
      <div className="text-center text-white text-[25px] font-semibold mb-4">
        Mass Schedule
      </div>

      {/* Mass Schedule Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="grid gap-4 w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            <motion.div {...leftAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Sunday
              <p className="text-[15px]">6:30am & 9:00am</p>
            </motion.div>
            <motion.div {...rightAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Monday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <motion.div {...leftAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Thursday
              <p className="text-[15px]">Adoration 6:30PM</p>
            </motion.div>
            <motion.div {...rightAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Friday
              <p className="text-[15px]">Children Mass 6:00pm</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-4 w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            <motion.div {...leftAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Tuesday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
            <motion.div {...rightAnimation} className="bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4 max-w-full">
              Wednesday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <motion.div {...leftAnimation} className="bg-gray-50 rounded-[20px] text-[18px] font-semibold flex flex-col justify-center items-center text-center p-2 max-w-full">
              Saturday
              <p className="text-[14px]">Exposition/Benediction 6:30am</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mass;