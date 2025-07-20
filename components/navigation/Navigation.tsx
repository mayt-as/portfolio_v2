'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetUtils';

interface NavigationProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ sections, activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#121212]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#121212]">
                  <Image
                    src={getAssetPath('/satyam_avatar.png')}
                    alt="Satyam Pandey"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'text-[#00A3FF]'
                      : 'text-gray-300 hover:text-[#00A3FF]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="w-full h-0.5 bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] mt-1"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-[#1E1E1E]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-full bg-[#1E1E1E] border-l border-gray-700 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">Menu</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="space-y-4">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-[#00A3FF]/20 to-[#7B4DFF]/20 text-[#00A3FF] border border-[#00A3FF]/30'
                          : 'text-gray-300 hover:bg-[#121212] hover:text-[#00A3FF]'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {section.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}