import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRobot, FaBrain, FaCode, FaMicrochip } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categoryIcons = {
    robotics: <FaRobot className="w-7 h-7" />,
    ai: <FaBrain className="w-7 h-7" />,
    programming: <FaCode className="w-7 h-7" />,
    hardware: <FaMicrochip className="w-7 h-7" />,
  };

  return (
    <section id="skills" className="py-24 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to design intelligent robotics systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition"
            >
              {/* Icon */}
              <div className="mb-4 text-cyan-400">
                {categoryIcons[category]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-md bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
