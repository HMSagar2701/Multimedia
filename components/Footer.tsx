import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-orange-100">
      {/* Call-to-Action Section */}

      {/* Footer Content */}
      <div className="py-12 px-8 lg:px-20 bg-orange-100 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              {/* Replace with your logo */}
              <span className="text-orange-500 font-bold text-2xl ">❤️ Multimedia</span>
            </div>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-400 hover:scale-110 transition text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Designs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Design Contracts</a></li>
              <li><a href="#" className="hover:text-orange-500">Tips & Research</a></li>
              <li><a href="#" className="hover:text-orange-500">Find a Designer</a></li>
              <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Become a Designer</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Affiliates</a></li>
              <li><a href="#" className="hover:text-orange-500">Payouts</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-500 text-white py-6 text-center">
        <p className="text-sm">All rights reserved © 2024 to Multimedia Company</p>
      </div>
    </footer>
  );
};

export default Footer;
