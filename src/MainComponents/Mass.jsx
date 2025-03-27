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
    <div
      id="mass-schedule"
      className="bg-blue-800 h-auto md:h-[55vh] w-full p-4 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center text-white text-[25px] font-semibold mb-4">
        Mass Schedule
      </div>

      {/* Outer Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column Wrapper – Flatten on Mobile */}
        <div className="contents md:grid gap-4 w-full">
          {/* First Row of Left Column – Flatten on Mobile */}
          <div className="contents md:grid md:grid-cols-2 gap-4 w-full">
            <motion.div
              {...leftAnimation}
              className="order-1 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Sunday
              <p className="text-[15px]">6:30am &amp; 9:00am</p>
            </motion.div>
            <motion.div
              {...rightAnimation}
              className="order-2 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Monday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
          </div>
          {/* Second Row of Left Column – Flatten on Mobile */}
          <div className="contents md:grid md:grid-cols-2 gap-4 w-full">
            <motion.div
              {...leftAnimation}
              className="order-5 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Thursday
              <p className="text-[15px]">Adoration 6:30PM</p>
            </motion.div>
            <motion.div
              {...rightAnimation}
              className="order-6 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Friday
              <p className="text-[15px]">Children Mass 6:00pm</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column Wrapper – Flatten on Mobile */}
        <div className="contents md:grid gap-4 w-full">
          {/* First Row of Right Column – Flatten on Mobile */}
          <div className="contents md:grid md:grid-cols-2 gap-4 w-full">
            <motion.div
              {...leftAnimation}
              className="order-3 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Tuesday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
            <motion.div
              {...rightAnimation}
              className="order-4 md:order-none bg-gray-50 rounded-[20px] text-[20px] font-semibold flex flex-col justify-center items-center text-center p-4"
            >
              Wednesday
              <p className="text-[15px]">6:00am</p>
            </motion.div>
          </div>
          {/* Second Row of Right Column – Flatten on Mobile */}
          <div className="contents md:grid md:grid-cols-2 gap-4 w-full">
            <motion.div
              {...leftAnimation}
              className="order-7 md:order-none bg-gray-50 rounded-[20px] text-[18px] font-semibold flex flex-col justify-center items-center text-center p-2"
            >
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
