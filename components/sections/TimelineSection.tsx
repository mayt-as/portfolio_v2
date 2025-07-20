'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetUtils';

interface TimelineSectionProps {
  setActiveSection: (section: string) => void;
}

export default function TimelineSection({ setActiveSection }: TimelineSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '-50px 0px'
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: '100px 0px'
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('timeline');
    }
  }, [inView, setActiveSection]);

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer II',
      company: 'MAQ Software',
      location: 'Noida, Uttar Pradesh, India',
      period: 'Apr 2025 – Present',
      type: 'Work',
      description: 'Developed Angular-based UI features, led accessibility efforts, and architected AI-powered data agent solutions integrated with SQL Lakehouse and Power BI.',
      achievements: [
        'Led front-end accessibility for WCAG/ADA compliance',
        'Designed modular AI-powered data agent solution',
        'Implemented multi-agent framework for analytics',
        'Integrated with SQL Lakehouse and Power BI'
      ],
      technologies: ['Angular', 'Syncfusion', 'SQL Lakehouse', 'Power BI', 'AI Agents'],
      logo: getAssetPath('/MAQ_Software_logo.png'),
      logoAlt: 'MAQ Software'
    },
    {
      id: 2,
      title: 'Software Engineer I',
      company: 'MAQ Software',
      location: 'Noida, Uttar Pradesh, India',
      period: 'Aug 2023 – Mar 2025',
      type: 'Work',
      description: 'Led a team to develop an advanced RAG-based AI chatbot, built scalable data pipelines, and implemented Responsible AI techniques.',
      achievements: [
        'Developed RAG-based AI chatbot for 80K+ users',
        'Built scalable data pipelines with Python & Spark',
        'Achieved 95%+ Responsible AI compliance',
        'Designed multi-region deployment with Docker'
      ],
      technologies: ['Python', 'Spark', 'Docker', 'RAG', 'GenAI', 'CI/CD', 'Azure'],
      logo: getAssetPath('/MAQ_Software_logo.png'),
      logoAlt: 'MAQ Software'
    },
    {
      id: 3,
      title: 'Associate Software Engineer',
      company: 'MAQ Software',
      location: 'Noida, Uttar Pradesh, India',
      period: 'Feb 2023 – Jul 2023',
      type: 'Work',
      description: 'Created and optimized databases and ETL pipelines, improved data integrity and system stability.',
      achievements: [
        'Optimized SQL Server databases and procedures',
        'Developed ETL pipelines using SSIS',
        'Resolved SQL Server and SSIS issues',
        'Improved system stability and efficiency'
      ],
      technologies: ['SQL Server', 'SSIS', 'ETL'],
      logo: getAssetPath('/MAQ_Software_logo.png'),
      logoAlt: 'MAQ Software'
    },
    {
      id: 4,
      title: 'B.Tech (IT)',
      company: 'IIIT Bhubaneswar',
      location: 'Bhubaneswar, Odisha, India',
      period: '2019 – 2023',
      type: 'Education',
      description: 'Graduated with a GPA of 7.72. Focused on software engineering, data engineering, and competitive programming.',
      achievements: [
        'Strong academic performance',
        'Active in coding competitions',
        'Completed multiple software projects',
        '1500+ programming problems solved'
      ],
      technologies: ['Python', 'C++', 'Java', 'SQL', 'Software Engineering'],
      logo: getAssetPath('/IIIT_Bh_Official_Logo.gif'),
      logoAlt: 'IIIT Bhubaneswar'
    }
  ];

  return (
    <section
      ref={ref}
      id="timeline"
      className="py-12 sm:py-16 lg:py-20 bg-[#121212] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00A3FF] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#7B4DFF] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            My educational background and development journey in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline line - visible on desktop only */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00A3FF] to-[#7B4DFF] hidden lg:block z-0"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={timelineInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: timelineInView ? index * 0.15 : 0 }}
              >
                {/* Mobile and Tablet Timeline */}
                <div className="lg:hidden">
                  <div className="flex">
                    {/* Mobile Timeline dot and line */}
                    <div className="flex flex-col items-center mr-4 sm:mr-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] rounded-full border-2 border-[#121212] z-10" />
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 h-56 sm:h-64 md:h-72 bg-gradient-to-b from-[#00A3FF] to-[#7B4DFF] mt-4" />
                      )}
                    </div>
                    
                    {/* Mobile/Tablet Card */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        className="bg-[#1E1E1E] rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-[#00A3FF] transition-all duration-300 shadow-lg"
                        whileHover={{ y: -5 }}
                      >
                        {/* Improved Header Section */}
                        <div className="mb-6">
                          {/* Main Header - Flex Container */}
                          <div className="flex items-start justify-between gap-4 mb-4">
                            {/* Left side: Logo + Title & Company */}
                            <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                              {/* Logo with border */}
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border-2 border-[#00A3FF]/30 p-2 bg-[#121212]/50 flex items-center justify-center">
                                  <Image
                                    src={experience.logo}
                                    alt={experience.logoAlt}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                              
                              {/* Title & Company - Stacked vertically */}
                              <div className="min-w-0 flex-1">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-1 break-words">
                                  {experience.title}
                                </h3>
                                <p className="text-[#00A3FF] font-semibold text-sm sm:text-base md:text-lg break-words">
                                  {experience.company}
                                </p>
                              </div>
                            </div>
                            
                            {/* Right side: Type Tag */}
                            <div className="flex-shrink-0">
                              <span className={`inline-flex px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                                experience.type === 'Education' 
                                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                  : experience.type === 'Work'
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                  : experience.type === 'Contribution'
                                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                  : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                              }`}>
                                {experience.type}
                              </span>
                            </div>
                          </div>
                          
                          {/* Period & Location - Justified content */}
                          <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm bg-[#181818]/50 rounded-lg px-4 py-3 border border-gray-700/50">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 text-[#00A3FF]" />
                              <span className="font-medium">{experience.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 text-[#00A3FF]" />
                              <span className="font-medium">{experience.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed text-base">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center text-base">
                            <Award className="h-4 w-4 mr-2 text-[#00A3FF]" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-400 text-sm flex items-start">
                                <TrendingUp className="h-4 w-4 mr-3 mt-0.5 text-[#00A3FF] flex-shrink-0" />
                                <span className="break-words">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 text-base">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-[#121212] text-gray-300 text-sm rounded-full border border-gray-600 hover:border-[#00A3FF] hover:text-white transition-all duration-200 break-words"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                  <div className="flex items-center">
                    {/* Desktop card */}
                    <div className={`${
                      index % 2 === 0 
                        ? 'w-[45%] xl:w-[48%] pr-8 xl:pr-12' 
                        : 'w-[45%] xl:w-[48%] ml-auto pl-8 xl:pl-12'
                    }`}>
                      <motion.div
                        className="bg-[#1E1E1E] rounded-xl p-8 border border-gray-700 hover:border-[#00A3FF] transition-all duration-300 shadow-lg"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        {/* Improved Desktop Header */}
                        <div className="mb-6">
                          {/* Main Header - Flex Container */}
                          <div className="flex items-start justify-between gap-6 mb-4">
                            {/* Left side: Logo + Title & Company */}
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                              {/* Logo with border */}
                              <div className="flex-shrink-0">
                                <div className="w-16 h-16 xl:w-18 xl:h-18 rounded-lg border-2 border-[#00A3FF]/30 p-3 bg-[#121212]/50 flex items-center justify-center">
                                  <Image
                                    src={experience.logo}
                                    alt={experience.logoAlt}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                              
                              {/* Title & Company - Stacked vertically */}
                              <div className="min-w-0 flex-1">
                                <h3 className="text-xl xl:text-2xl font-bold text-white leading-tight mb-2 break-words">
                                  {experience.title}
                                </h3>
                                <p className="text-[#00A3FF] font-semibold text-base xl:text-lg break-words">
                                  {experience.company}
                                </p>
                              </div>
                            </div>
                            
                            {/* Right side: Type Tag */}
                            <div className="flex-shrink-0">
                              <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                                experience.type === 'Education' 
                                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                  : experience.type === 'Work'
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                  : experience.type === 'Contribution'
                                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                  : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                              }`}>
                                {experience.type}
                              </span>
                            </div>
                          </div>
                          
                          {/* Period & Location - Justified content */}
                          <div className="flex items-center justify-between text-gray-400 text-sm xl:text-base bg-[#181818]/50 rounded-lg px-6 py-4 border border-gray-700/50">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 xl:h-5 xl:w-5 mr-3 flex-shrink-0 text-[#00A3FF]" />
                              <span className="font-medium">{experience.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 xl:h-5 xl:w-5 mr-3 flex-shrink-0 text-[#00A3FF]" />
                              <span className="font-medium">{experience.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed text-base xl:text-lg">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center text-base xl:text-lg">
                            <Award className="h-4 w-4 xl:h-5 xl:w-5 mr-2 text-[#00A3FF]" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-400 text-sm xl:text-base flex items-start">
                                <TrendingUp className="h-4 w-4 mr-3 mt-0.5 text-[#00A3FF] flex-shrink-0" />
                                <span className="break-words">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 text-base xl:text-lg">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2 xl:gap-3">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 xl:px-4 py-1.5 xl:py-2 bg-[#121212] text-gray-300 text-sm xl:text-base rounded-full border border-gray-600 hover:border-[#00A3FF] hover:text-white transition-all duration-200 break-words"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop Timeline dot - positioned relative to the timeline container */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] rounded-full border-4 border-[#121212] z-10" 
                       style={{ left: 'calc(50% - 8px)' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career stats */}
        <motion.div
          className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '1500+', label: 'Problems Solved' },
            { number: '6', label: 'Certifications' },
            { number: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 lg:p-8 bg-[#1E1E1E] rounded-xl border border-gray-700 hover:border-[#00A3FF] transition-all duration-300 flex flex-col justify-center items-center group hover:bg-[#252525]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A3FF] mb-2 group-hover:text-[#7B4DFF] transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}