/**
 * NAVBAR COMPONENT
 *
 * This is the top navigation bar with links to different sections.
 *
 * WHAT YOU CAN EDIT:
 * - Navigation links: Change the navLinks array items
 * - Logo text: Change portfolioData.personal.name
 * - Colors: Modify the Tailwind classes (bg-gray-900, text-cyan-400, etc.)
 *
 * The navbar is sticky (stays at top when scrolling) and has a mobile hamburger menu.
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Navbar = () => {
  // State for mobile menu (open/closed)
  const [isOpen, setIsOpen] = useState(false);

  // State for navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // Navigation menu items
  // TO ADD A NEW LINK: Add a new object to this array
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section when clicking a link
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Name */}
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            pcodes007
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-800/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;