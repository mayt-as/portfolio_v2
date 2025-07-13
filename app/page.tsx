'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
// import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/navigation/Navigation';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    // { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Journey' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="relative min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation 
        sections={sections} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection setActiveSection={setActiveSection} />
        {/* <ProjectsSection setActiveSection={setActiveSection} /> */}
        <SkillsSection setActiveSection={setActiveSection} />
        <TimelineSection setActiveSection={setActiveSection} />
        <ContactSection setActiveSection={setActiveSection} />
      </main>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
}