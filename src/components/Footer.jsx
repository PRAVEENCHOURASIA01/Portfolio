import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: portfolioData.social.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: portfolioData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: portfolioData.social.twitter,
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">

        {/* Name + Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          {portfolioData.personal.name}
        </h2>
        <p className="text-gray-400 mb-6">
          {portfolioData.personal.title}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          © {currentYear} {portfolioData.personal.name}. Made with
          <FaHeart className="text-red-500 animate-pulse" />
          using React
        </p>

      </div>
    </footer>
  );
};

export default Footer;
