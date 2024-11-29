"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaRegLightbulb, FaHandshake, FaDollarSign, FaChartPie, FaGlobe, FaTools, FaInfinity } from "react-icons/fa";

export const Features = () => {
    return (
        <div>
            <section className="py-16 bg-orange-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-center text-orange-500">
                        We provide Best Services
                    </h2>
                    <p className="text-center mb-8 text-gray-700 text-xl">
                        Lets connect and enhance the value of your services with our expertise.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{
                            title: "1. Strategy Development",
                            content: "We craft effective strategies tailored to your goals, ensuring measurable results.",
                            icon: <FaChartLine />
                        },
                        {
                            title: "2. Customer Engagement",
                            content: "Our innovative solutions boost customer interaction and satisfaction.",
                            icon: <FaUsers />
                        },
                        {
                            title: "3. Innovative Solutions",
                            content: "We provide creative and cutting-edge solutions to complex challenges.",
                            icon: <FaRegLightbulb />
                        },
                        {
                            title: "4. Reliable Partnerships",
                            content: "We believe in fostering long-term partnerships built on trust and reliability.",
                            icon: <FaHandshake />
                        },
                        {
                            title: "5. Cost Efficiency",
                            content: "Our services optimize your budget while delivering exceptional value.",
                            icon: <FaDollarSign />
                        },
                        {
                            title: "6. Data Analytics",
                            content: "We analyze data to provide insights that drive informed decision-making.",
                            icon: <FaChartPie />
                        },
                        {
                            title: "7. Global Outreach",
                            content: "Our solutions ensure a strong global presence for your services.",
                            icon: <FaGlobe />
                        },
                        {
                            title: "8. Technical Support",
                            content: "We provide robust technical support to maintain seamless operations.",
                            icon: <FaTools />
                        },
                        {
                            title: "9. Continuous Improvement",
                            content: "We focus on innovation and adaptation to keep you ahead in the market.",
                            icon: <FaInfinity />
                        }].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-orange-100 border-2 border-orange-120 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-orange-500 mb-4 text-3xl">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700">
                                    {feature.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
