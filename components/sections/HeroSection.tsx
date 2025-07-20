'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Linkedin } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assetUtils';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => [
    'Software Engineer II @ MAQ Software',
    'AI & Data Engineering Specialist',
    'Angular & Python Developer',
    'Cloud-Native Platform Builder',
    'Problem Solver (Knight @ LeetCode)'
  ], []);

  useEffect(() => {
    if (inView) {
      setActiveSection('hero');
    }
  }, [inView, setActiveSection]);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.substring(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentIndex, roles]);

  const techStack = [
    'Python', 'C#', 'C++', 'Java', 'SQL', 'JavaScript',
    'Angular', 'React', 'FastAPI', 'Spark', 'Semantic Kernel', 'Syncfusion',
    'Docker', 'CI/CD', 'Databricks', 'Snowflake', 'SSIS', 'Git',
    'Azure', 'SQL Lakehouse', 'Vector DBs', 'Cloud AI Services', 'SQL Server'
  ];

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/mayt-as', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/satyampande', label: 'LinkedIn' },
    { icon: SiX, href: 'https://x.com/SatyamPande_', label: 'X' }
  ];

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = getAssetPath('/Satyam_Pandey_Resume.pdf');
    link.download = 'Satyam_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212] px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#00A3FF] rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#7B4DFF] rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Satyam
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
                Pandey
              </span>
            </motion.h1>

            <motion.div
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 h-8 sm:h-10 md:h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="mr-2 flex items-center">I&apos;m a</span>
              <span className="text-[#00A3FF] font-semibold min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[400px] text-left flex items-center">
                {typewriterText}
                <motion.span
                  className="inline-block w-0.5 h-5 sm:h-6 md:h-8 lg:h-10 bg-[#00A3FF] ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.div>
          </motion.div>

          {/* Tech stack floating icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 sm:mt-12 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-2 sm:px-4 py-1 sm:py-2 bg-[#1E1E1E] border border-gray-700 rounded-full text-xs sm:text-sm font-medium hover:border-[#00A3FF] hover:text-[#00A3FF] transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-8 mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#1E1E1E] border border-gray-700 hover:border-[#00A3FF] hover:bg-[#00A3FF]/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-gray-300 hover:text-[#00A3FF] transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}