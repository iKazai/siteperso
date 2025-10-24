import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { SITE_CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: SITE_CONFIG.social.github, 
      icon: <FaGithub />, 
      label: "GitHub",
      color: "#fff"
    },
    { 
      href: SITE_CONFIG.social.linkedin, 
      icon: <FaLinkedin />, 
      label: "LinkedIn",
      color: "#0077B5"
    },
    { 
      href: SITE_CONFIG.social.instagram, 
      icon: <FaInstagram />, 
      label: "Instagram",
      color: "#E4405F"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] bg-clip-text text-transparent">
              {SITE_CONFIG.author.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {SITE_CONFIG.author.title}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {SITE_CONFIG.navigation.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-[#b5dcff] transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl hover:from-[#b5dcff]/20 hover:to-[#a78bfa]/20 transition-all duration-300 border border-white/10 hover:border-[#b5dcff]/50"
                  style={{ color: link.color }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by {SITE_CONFIG.author.name} © {currentYear}
          </p>
          <p className="mt-2 opacity-70">
            All rights reserved. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
