import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contacts');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="contacts" className="min-h-[80vh] w-full flex justify-center items-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="bg-white w-full max-w-md mt-[20px] mb-[20px] rounded-lg shadow-2xl p-6"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">Connect With Us</h1>
          <p className="text-sm text-gray-500">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message here"
              rows="3"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-blue-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-orange-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;