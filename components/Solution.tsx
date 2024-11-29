"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImage from "@/public/Images/Man with phone.png"; 

export const Solutions = () => {
    return (
        <section className="bg-orange-50 py-12 px-6">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
                {/* Left Section - Illustration */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={placeholderImage}
                            alt="Person on orange chair"
                            className="max-w-full"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </div>

                {/* Right Section - Content */}
                <div className="w-full lg:w-1/2">
                    <motion.h2
                        className="text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Simple <span className="text-orange-500">Solutions!</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We understand that no two businesses are alike. That’s why we take the time to understand.
                    </motion.p>
                    <motion.ul
                        className="space-y-4 text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {[
                            { number: 1, title: "Contact us", text: "Contact us to boost your brand visibility." },
                            { number: 2, title: "Consult", text: "Always available to answer your questions." },
                            { number: 3, title: "Place order", text: "Buy our package today to proceed." },
                            { number: 4, title: "Payment", text: "We welcome payments in all types of banking." },
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="bg-orange-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                    {item.number}
                                </span>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </motion.ul>
                    <div className="mt-8 flex space-x-4">
                        <motion.button
                            className="bg-orange-500 text-white py-2 px-6 rounded-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            className="border border-orange-500 text-orange-500 py-2 px-6 rounded-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read more
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};
