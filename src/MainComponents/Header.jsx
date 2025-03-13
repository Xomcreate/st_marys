import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";
import { FiMenu, FiX } from "react-icons/fi";
import Register from "./Register";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
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
              <a href="/gallery" className="hover:text-blue-600">
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
                  >
                    Mass Schedule
                  </a>
                  <a
                    href="/announcements"
                    className="block text-[13px] px-4 py-2 hover:bg-gray-100"
                  >
                    Announcements
                  </a>
                  <a
                    href="#parishactivities"
                    className="block text-[13px] px-4 py-2 hover:bg-gray-100"
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

        {/* Desktop Button (Only Register) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-blue-800 h-[40px] w-[100px] text-white font-semibold rounded-full"
            onClick={() => setIsRegisterOpen(true)}
          >
            Register
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
                  href="/gallery"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li className="relative">
                <button
                  className="hover:text-blue-600"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
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
                      href="/announcements"
                      className="block px-4 py-2 hover:bg-gray-100 text-[13px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Announcements
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
              <li>
                <button
                  className="w-[120px] h-[40px] bg-blue-800 text-white font-semibold rounded-full"
                  onClick={() => {
                    setIsRegisterOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Register
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      {isRegisterOpen && (
        <Register
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
