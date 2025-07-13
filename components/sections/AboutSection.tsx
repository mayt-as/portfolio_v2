'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Brain, Target, Users, Award } from 'lucide-react';

interface AboutSectionProps {
  setActiveSection: (section: string) => void;
}

export default function AboutSection({ setActiveSection }: AboutSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px 0px'
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  const stats = [
    { number: '2+', label: 'Years Experience', icon: Target },
    { number: '1500+', label: 'Problems Solved', icon: Code },
    { number: '6', label: 'Certifications', icon: Award },
    { number: '5+', label: 'Team Collaborations', icon: Users }
  ];

  const focusAreas = [
    {
      icon: Code,
      title: 'AI-Powered Systems',
      description: 'Designing and implementing modular, multi-agent RAG solutions and scalable data pipelines using Python, Spark, and cloud-native platforms.'
    },
    {
      icon: Brain,
      title: 'Accessible UI & Frontend',
      description: 'Developing dynamic, accessible Angular-based UIs, leading accessibility efforts for WCAG/ADA compliance, and building custom components.'
    },
    {
      icon: Cloud,
      title: 'Cloud & Data Engineering',
      description: 'Building secure, distributed, and high-availability platforms on Azure, SQL Lakehouse, and integrating with Power BI and vector databases.'
    }
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-[#1E1E1E] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00A3FF] to-[#7B4DFF]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-2">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                About{' '}
                <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I&apos;m Satyam Pandey, a Software Engineer with 2 years of experience specializing in building scalable applications and AI-powered systems. My passion lies in crafting cloud-native platforms that are both secure and accessible, designed to thrive in distributed environments.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                My expertise spans full-stack development, from creating dynamic, Angular-based UI features and ensuring WCAG/ADA compliance, to architecting robust backend services. I have a strong track record in data engineering with Python and Spark, and a particular focus on designing and implementing advanced AI solutions, including multi-agent RAG frameworks and AI-powered data agent solutions.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I&apos;m driven by a desire to optimize data workflows, enhance system performance, and implement Responsible AI principles. My commitment to excellence is reflected in my competitive programming achievements and certifications, including Microsoft Certified Azure AI Engineer Associate and Databricks Certified Data Engineer Associate.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                Explore my projects to see how I translate complex challenges into innovative and impactful solutions.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-1 flex justify-center">
              <motion.div
                className="grid grid-cols-2 gap-4 w-full max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-[#121212] rounded-lg border border-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="h-8 w-8 text-[#00A3FF] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Areas of{' '}
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="p-6 bg-[#121212] rounded-xl border border-gray-700 hover:border-[#00A3FF] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A3FF] to-[#7B4DFF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{area.title}</h4>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}