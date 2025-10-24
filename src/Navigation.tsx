import './styles/Navigation.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#pictures', label: 'Pictures' },
    { href: '#about', label: 'About me' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="Navigation bg-base-100/80 backdrop-blur-md h-24 flex flex-row justify-between items-center p-6 fixed top-0 left-0 right-0 z-10 border-b border-white/10"
      >
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-bold"
        >
          <span className="relative inline-block group cursor-pointer">
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              Delma
            </span>
            <span className="absolute top-0 left-0 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] bg-clip-text text-transparent">
              StaDELMAnn
            </span>
          </span>
        </motion.h2>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-ghost text-2xl relative group overflow-hidden transition-all duration-300 hover:bg-transparent"
          onClick={toggleMenu}
        >
          <span className="relative z-10 group-hover:text-[#b5dcff] transition-colors duration-300">Menu</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b5dcff] group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </motion.button>
      </motion.div>
      
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            {/* Bouton de fermeture */}
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              className="absolute top-8 right-8 text-white text-4xl hover:text-[#b5dcff] transition-colors duration-300 z-60 cursor-pointer"
              onClick={toggleMenu}
            >
              ✕
            </motion.button>

            {/* Menu principal */}
            <nav className="flex flex-col space-y-8">
              {menuItems.map((item, index) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="text-6xl text-white font-serif hover:text-[#b5dcff] transition-all duration-300 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}