"use client";
import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-orange-300">
      {/* Call-to-Action Section */}
      <div className="py-12 px-8 lg:px-20 bg-gray-100 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Logo */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-orange-500 font-bold text-2xl">❤️ Multimedia</span>
            </div>
            <div className="flex gap-4">
              {/* Social Icons */}
              <motion.a
                href="#"
                aria-label="Facebook"
                className="text-blue-600 hover:scale-110 transition text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                className="text-pink-500 hover:scale-110 transition text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="#"
                aria-label="Twitter"
                className="text-blue-400 hover:scale-110 transition text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Team</a></li>
            </ul>
          </motion.div>

          {/* Designs Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Designs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Design Contracts</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Tips & Research</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Find a Designer</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Pricing</a></li>
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Become a Designer</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Affiliates</a></li>
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Payouts</a></li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="bg-orange-500 text-white py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-sm">All rights reserved © 2024 to Multimedia Company</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
