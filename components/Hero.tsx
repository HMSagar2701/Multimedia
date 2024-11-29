"use client";
import { motion } from "framer-motion";
import manImage from "@/public/Images/Man with bag-nobg.png";
import womenImage from "@/public/Images/woman-nobg.png";
import { FaLightbulb, FaArrowCircleDown, FaRocket } from "react-icons/fa";

export const Hero = () => {
    // Floating effect keyframes for icons and images
    const floatAnimation = {
        animate: {
            y: [0, -10, 0], // Float up and down
        },
        transition: {
            duration: 3, // Duration of one cycle
            repeat: Infinity, // Repeat forever
            ease: "easeInOut",
        },
    };

    return (
        <div className="">
            <div className="container mx-auto px-6 bg-orange-50"> {/* Orange background applied */}
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/3 px-4">
                        <h1 className="text-5xl font-bold text-black mt-12">
                            We create <span className="text-orange-500">solutions</span> for your business
                        </h1>
                        <p className="my-7 text-lg text-gray-600">
                            Our team keeps an eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge.
                        </p>
                        <div>
                            <button className="text-white bg-orange-500 py-2 px-4 rounded-lg">
                                Get Started
                            </button>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-black text-xl font-bold inline">Explore more</h3>
                            {/* Arrow beside "Explore more" */}
                            <motion.div
                                className="hidden sm:inline-block text-4xl text-gray-600 ml-2 mt-2"
                                {...floatAnimation}
                            >
                                <FaArrowCircleDown />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-2/3 px-4 flex justify-center relative mt-12 lg:mt-20">
                        {/* Man Image */}
                        <motion.div
                            className="mt-10 sm:w-full lg:w-1/2 flex justify-center relative"
                            {...floatAnimation}
                        >
                            <motion.img
                                src={manImage.src}
                                height={400}
                                width={400}
                                alt="Man with Bag"
                                className="max-w-full"
                                initial={{ opacity: 0, x: -50 }} // Leftward movement
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ boxShadow: "none", background: "none" }}
                            />
                            {/* Floating Bulb Icon */}
                            <motion.div
                                className="absolute -top-12 left-12 text-yellow-400 text-4xl"
                                {...floatAnimation}
                            >
                                <FaLightbulb />
                            </motion.div>
                        </motion.div>

                        {/* Woman Image */}
                        <motion.div
                            className="mt-10 sm:w-full lg:w-1/2 flex justify-center relative"
                            {...floatAnimation}
                        >
                            <motion.img
                                src={womenImage.src}
                                height={400}
                                width={400}
                                alt="Woman"
                                className="max-w-full"
                                initial={{ opacity: 0, x: 50 }} // Rightward movement
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ boxShadow: "none", background: "none" }}
                            />
                            {/* Floating Rocket Icon on Women */}
                            <motion.div
                                className="absolute -top-10 right-12 text-orange-400 text-4xl"
                                {...floatAnimation}
                            >
                                <FaRocket />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
