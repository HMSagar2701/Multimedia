"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImage from "@/public/Images/lastone.png";

export const OurAgency = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2 mx-6 mb-8 lg:mb-0">
          <div className="w-2/3 ml-6">
            <motion.h2
              className="text-4xl font-bold text-orange-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-black">Our</span> Agency
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-4 text-xl mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI.
            </motion.p>
            <motion.p
              className="text-gray-700 mb-4 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              Decisions and optimise your marketing efforts for maximum ROI. Lets turn your data actionable insights. Tailored Solutions for your Business.
            </motion.p>
            <motion.p
              className="text-gray-700 mb-6 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              Lets turn your data into actionable insights. Tailored solutions for your business.
            </motion.p>
            <motion.button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              Read more
            </motion.button>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={placeholderImage} // Use actual image source
              alt="Data analytics illustration"
              className="max-w-full"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
