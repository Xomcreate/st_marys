import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";
import { FiMenu, FiX, FiBell } from "react-icons/fi";
import Announce from "./Announce"; // Import Announce component

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isAnnounceOpen, setIsAnnounceOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.div
        className={`fixed top-0 w-full z-50 min-h-[13vh] flex items-center px-4 md:px-10 shadow-md transition-all ${
          scrolling ? "bg-white/80 backdrop-blur-md" : "bg-white"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: scrolling ? -5 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Logo & Title */}
        <div className="flex flex-wrap items-center font-bold text-blue-800 text-[14px] sm:text-[18px] md:text-[25px] gap-2 flex-1">
          <img
            src={logo}
            alt="St. Mary's Logo"
            className="h-[40px] w-[60px] sm:h-[50px] sm:w-[70px] md:h-[60px] md:w-[80px]"
          />
          <span className="leading-tight text-center sm:text-left">
            St. Mary's Catholic Church, Iba
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center flex-1">
          <ol className="flex gap-6 text-[16px] items-center text-black font-semibold font-serif">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-600">
                Gallery
              </a>
            </li>
            <li className="relative">
              <button
                className="hover:text-blue-600"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Events
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-md">
                  <a
                    href="#mass-schedule"
                    className="block text-[13px] px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Mass Schedule
                  </a>
                  <a
                    href="#parishactivities"
                    className="block text-[13px] px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Parish Activities
                  </a>
                </div>
              )}
            </li>
            <li>
              <a href="#contacts" className="hover:text-blue-600">
                Contacts
              </a>
            </li>
          </ol>
        </div>

        {/* Desktop Announcements Bell Icon inside styled button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-blue-800 rounded-full p-2 shadow text-white text-2xl sm:text-3xl"
            onClick={() => setIsAnnounceOpen(true)}
          >
            <FiBell />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 text-2xl sm:text-3xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[13vh] left-0 w-full bg-white shadow-md md:hidden z-40 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col items-center text-center gap-4 p-6 text-black font-medium text-[15px]">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li className="relative">
                <button
                  className="hover:text-blue-600"
                  onClick={() =>
                    setIsMobileDropdownOpen(!isMobileDropdownOpen)
                  }
                >
                  Events
                </button>
                {isMobileDropdownOpen && (
                  <div className="mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-md text-center">
                    <a
                      href="#mass-schedule"
                      className="block px-4 py-2 hover:bg-gray-100 text-[13px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Mass Schedule
                    </a>
                    <a
                      href="#parishactivities"
                      className="block px-4 py-2 hover:bg-gray-100 text-[13px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Parish Activities
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#contacts"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contacts
                </a>
              </li>
              {/* Mobile Announcements Bell Icon inside styled button */}
              <li>
                <button
                  className="bg-blue-800 rounded-full p-2 shadow text-white text-2xl sm:text-3xl"
                  onClick={() => {
                    setIsAnnounceOpen(true);
                    setIsOpen(false);
                  }}
                >
                  <FiBell />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announce Modal */}
      <AnimatePresence>
        {isAnnounceOpen && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsAnnounceOpen(false)}
            ></div>
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-lg shadow-lg p-4 z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Announce />
              <button
                className="mt-4 bg-blue-800 text-white rounded-full px-4 py-2"
                onClick={() => setIsAnnounceOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
