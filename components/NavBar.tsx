"use client";
import Image from "next/image";
import LogoImage from "@/public/Images/logoicon.png";
import MenuIcon from "@/public/icons/menu.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // Track scroll position

    // Toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Update scroll state
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`transition-all ${scrolled ? "bg-orange-100 shadow-md" : "bg-orange-50"} text-black`}>
            <div className="container mx-auto px-4">
                <div className="py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <Image src={LogoImage} alt="Company Logo" width={40} height={20} />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex gap-6 items-center" role="navigation">
                        <a href="/" className="nav-link text-opacity-100 text-black hover:text-opacity-60 transition">Home</a>
                        <a href="/About" className="nav-link text-opacity-100 text-black hover:text-opacity-60 transition">About Us</a>
                        <a href="/Services" className="nav-link  text-opacity-100 text-black hover:text-opacity-60 transition">Services</a>
                        <a href="/Contact" className="nav-link text-opacity-100 text-black hover:text-opacity-60 transition">Contact Us</a>
                        <a href="/Blog" className="nav-link text-opacity-100 text-black hover:text-opacity-60 transition">Blog</a>
                        <button className="px-4 py-2 bg-orange-400 rounded-lg text-white hover:bg-orange-500 transition">
                            Sign Up
                        </button>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <Image src={MenuIcon} alt="Menu Icon" width={24} height={24} />
                    </button>
                </div>

                {/* Mobile Navigation with Framer Motion */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className="sm:hidden flex flex-col gap-4 py-4"
                            role="navigation"
                            aria-label="Mobile Navigation"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <a href="/" className="mobile-nav-link">Home</a>
                            <a href="/About" className="mobile-nav-link">About Us</a>
                            <a href="/Services" className="mobile-nav-link">Services</a>
                            <a href="/Contact" className="mobile-nav-link">Contact Us</a>
                            <a href="/Blog" className="mobile-nav-link">Blog</a>
                            <button className="px-4 py-2 bg-orange-400 rounded-lg text-white hover:bg-orange-500 transition">
                                Sign Up
                            </button>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
