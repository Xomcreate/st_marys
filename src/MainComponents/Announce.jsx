import React from "react";
import { motion } from "framer-motion";

function Announce() {
  return (
    <motion.div
      key="announce"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-7xl mx-auto"
    >
      <h2 className="text-xl font-bold text-blue-800 mb-4">Announcements</h2>
      {/* Announcements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="p-3 border border-gray-200 rounded-lg bg-gray-50 h-24 sm:h-32 w-full overflow-hidden"
          >
            <h3 className="text-lg font-semibold mb-1">Announcement {index + 1}</h3>
            <p className="text-gray-700 text-sm md:text-base line-clamp-2">
              This is a sample announcement text. It will wrap within the column and adjust to the available space.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Announce;
