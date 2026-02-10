/**
 * FOOTER COMPONENT
 *
 * This is the bottom section of the website with copyright and links.
 *
 * WHAT YOU CAN EDIT:
 * - Copyright text: Change the year and name
 * - Social links: Edit portfolioData.social
 * - Footer links: Modify the quickLinks array
 * - Colors: Update Tailwind classes
 */

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: portfolioData.social.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: portfolioData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: portfolioData.social.twitter,
      label: "Twitter",
    },
  ];

  // Quick navigation links (scroll to sections)
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll to section
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Footer content grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {portfolioData.personal.title}
            </p>
            <p className="text-gray-500 text-sm">
              Building the future with robotics and AI.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>

            {/* Made with love message */}
            <p className="text-gray-500 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;