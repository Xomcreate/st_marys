import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Register({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }} // Smooth fade-out transition
        >
          <motion.div
            className="bg-white w-full max-w-lg rounded-lg shadow-2xl p-8 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.4 } }} // Slide down while fading out
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-900"
            >
              ✖
            </button>

            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Register Now</h1>
              <p className="text-sm text-gray-500">Become a Parishioner</p>
            </div>

            <form className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="First name" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
                <input type="text" placeholder="Last name" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
              </div>

              <div className="flex gap-4">
                <input type="text" placeholder="Username" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
                <input type="email" placeholder="Email" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
              </div>

              <div className="flex gap-4">
                <input type="tel" placeholder="Phone number" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
                <input type="text" placeholder="State" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
              </div>

              <div className="flex gap-4">
                <input type="password" placeholder="Password" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
                <input type="password" placeholder="Confirm password" className="w-1/2 px-4 py-2 border rounded-lg shadow-sm" />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
              </div>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Already have an account? <span className="text-black hover:underline font-medium">Log in</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Register;