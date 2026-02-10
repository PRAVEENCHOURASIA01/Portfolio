/**
 * ABOUT COMPONENT
 *
 * This section displays information about you with a profile image.
 *
 * WHAT YOU CAN EDIT:
 * - About text: Edit portfolioData.about.description in portfolioData.js
 * - Profile image: Replace the image path in portfolioData.about.image
 * - Layout: The component uses a two-column layout (text + image)
 * - Colors: Modify Tailwind classes for background and text colors
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portfolioData from "../data/portfolioData";

const About = () => {
  // Hook to detect when section comes into view for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Two-column layout: Text + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Loop through description paragraphs */}
            {portfolioData.about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 text-lg mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Download Resume button */}
            <motion.a
              href={portfolioData.personal.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 mt-4"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg transform rotate-6"></div>

              {/* Actual image container */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src={portfolioData.about.image}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.src = "https://via.placeholder.com/400x400/1f2937/06b6d4?text=Your+Photo";
                  }}
                />
                {/* Overlay gradient for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>

            {/* Floating stats cards (optional decoration) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-gray-900 border border-cyan-400 rounded-lg p-4 shadow-lg"
            >
              <div className="text-cyan-400 font-bold text-2xl">5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-4 -right-4 bg-gray-900 border border-purple-400 rounded-lg p-4 shadow-lg"
            >
              <div className="text-purple-400 font-bold text-2xl">50+</div>
              <div className="text-gray-300 text-sm">Projects Done</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;