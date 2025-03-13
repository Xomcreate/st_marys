import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-blue-800 text-white py-8 px-4 w-full overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
        
        {/* Church Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center md:items-start w-full"
        >
          <h2 className="text-lg font-semibold">St. Mary's Catholic Church</h2>
          <p className="text-sm mt-2">
            53, Musadolohun Str., Iba New Town
            <br />
            Phone: (07014355015)
            <br />
            Email: stmaryscath.churchiba@gmail.com
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center md:items-start w-full"
        >
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="text-sm mt-2 space-y-1">
            <li><a href="#about" className="hover:text-gray-300 transition transform hover:scale-105">About Us</a></li>
            <li><a href="#events" className="hover:text-gray-300 transition transform hover:scale-105">Events</a></li>
            <li><a href="#gallery" className="hover:text-gray-300 transition transform hover:scale-105">Gallery</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition transform hover:scale-105">Contacts</a></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col items-center md:items-start w-full"
        >
          <h2 className="text-lg font-semibold">Connect With Us</h2>
          <div className="flex mt-2 space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300 transition transform hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 transition transform hover:scale-110"><CiInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition transform hover:scale-110"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-300 transition transform hover:scale-110"><FaTiktok /></a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="text-center text-sm font-medium mt-8"
      >
        © 2025 St. Mary's Catholic Church. All Rights Reserved.
      </motion.div>
    </motion.div>
  );
}

export default Footer;
