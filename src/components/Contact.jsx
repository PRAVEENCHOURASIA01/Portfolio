/**
 * CONTACT COMPONENT
 *
 * This section displays a contact form and social media links.
 *
 * WHAT YOU CAN EDIT:
 * - Contact email: Edit portfolioData.contact.email
 * - Contact message: Edit portfolioData.contact.message
 * - Social links: Edit portfolioData.social
 * - Form fields: Modify the form inputs below
 *
 * NOTE: This is a frontend-only form. To make it functional, you'll need to:
 * 1. Add a backend API endpoint to handle form submissions
 * 2. Or use a service like Formspree, EmailJS, or Netlify Forms
 * 3. Update the handleSubmit function to send data to your endpoint
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // For success/error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Add your form submission logic here
    // Example using EmailJS, Formspree, or your own backend

    console.log("Form submitted:", formData);

    // Simulate success (replace with actual submission)
    setFormStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setFormStatus(""), 3000);
  };

  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: portfolioData.social.github,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: portfolioData.social.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: portfolioData.social.twitter,
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: `mailto:${portfolioData.contact.email}`,
      label: "Email",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {portfolioData.contact.message}
          </p>
        </motion.div>

        {/* Two-column layout: Form + Contact info */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane className="w-4 h-4" />
              </motion.button>

              {/* Form status message */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/20 border border-emerald-500 rounded-lg text-emerald-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Email card */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-400">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;