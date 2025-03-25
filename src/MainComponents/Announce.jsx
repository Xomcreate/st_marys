import React, { useState } from "react";
import { motion } from "framer-motion";

function Announce() {
  const [isVisible] = useState(true);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {isVisible && (
        <motion.div
          key="announce"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative bg-white p-4 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold text-black mb-4 text-center">
            Announcements
          </h2>
          {/* Scrollable container for mobile view only */}
          <div className="max-h-[60vh] overflow-y-auto md:max-h-full md:overflow-visible">
            {/* Responsive Announcements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {/* Announcement 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">
                  Small Christian Community
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  SCC gathering comes up every Monday from 7-8pm. Please visit centres closest to you.
                </p>
              </motion.div>

              {/* Announcement 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">
                  Bulletin Advert Space
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Space for monthly bulletin publication. Half Page.
                </p>
              </motion.div>

              {/* Announcement 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">Tithe Sunday</h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Every first Sunday of the month is our tithe Sunday. Please take note.
                </p>
              </motion.div>

              {/* Announcement 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">
                  Organisational Sunday
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Every 2nd Sunday of the month is the umbrella societies (CMO, CWO, MCA & CYON) meeting. Please be informed.
                </p>
              </motion.div>

              {/* Announcement 5 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">
                  Registration Of Baptism
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  All parents and guardians interested in registering their child/children for baptism are advised to visit the parish office.
                </p>
              </motion.div>

              {/* Announcement 6 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[100px] overflow-hidden"
              >
                <h3 className="text-[15px] font-semibold mb-1">
                  Pre-Marital Class
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  This is to inform parishioners who have not been wedded in the church that our marriage course class begins on the 23rd of March, 2025 after 9:00am mass.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Announce;
