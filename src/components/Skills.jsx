/**
 * SKILLS COMPONENT
 *
 * This section displays your technical skills organized in categories.
 *
 * WHAT YOU CAN EDIT:
 * - Skills: Edit portfolioData.skills in portfolioData.js
 * - Categories: Add/remove categories in the skills object
 * - Icons: Change the icon for each category in the categoryIcons object
 * - Colors: Modify the gradient colors and hover effects
 *
 * TO ADD A NEW SKILL CATEGORY:
 * 1. Add the category to portfolioData.skills
 * 2. Add an icon for it in the categoryIcons object below
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaRobot, FaBrain, FaCode, FaMicrochip } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Icons for each skill category
  // TO ADD A NEW ICON: Import it from react-icons and add it here
  const categoryIcons = {
    robotics: <FaRobot className="w-8 h-8" />,
    ai: <FaBrain className="w-8 h-8" />,
    programming: <FaCode className="w-8 h-8" />,
    hardware: <FaMicrochip className="w-8 h-8" />,
  };

  // Colors for each category (gradient backgrounds)
  const categoryColors = {
    robotics: "from-cyan-500 to-blue-500",
    ai: "from-purple-500 to-pink-500",
    programming: "from-emerald-500 to-teal-500",
    hardware: "from-orange-500 to-red-500",
  };

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Skills grid - displays all skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-cyan-400"
            >
              {/* Category header with icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center mb-4 text-white`}>
                {categoryIcons[category]}
              </div>

              {/* Category name */}
              <h3 className="text-xl font-bold text-white mb-4 capitalize">
                {category}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-cyan-500 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Skills summary text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Continuously learning and expanding my skillset to stay at the forefront of robotics and AI technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;