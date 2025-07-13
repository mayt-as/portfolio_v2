'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone, Palette, Settings } from 'lucide-react';

interface SkillsSectionProps {
  setActiveSection: (section: string) => void;
}

export default function SkillsSection({ setActiveSection }: SkillsSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px 0px'
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('skills');
    }
  }, [inView, setActiveSection]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, years: '2+ years' },
        { name: 'C#', level: 85, years: '2+ years' },
        { name: 'C++', level: 85, years: '2+ years' },
        { name: 'Java', level: 80, years: '2+ years' },
        { name: 'JavaScript', level: 90, years: '2+ years' },
        { name: 'SQL', level: 90, years: '2+ years' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: [
        { name: 'Angular', level: 95, years: '2+ years' },
        { name: 'React', level: 85, years: '2+ years' },
        { name: 'FastAPI', level: 80, years: '1+ years' },
        { name: 'Spark', level: 80, years: '1+ years' },
        { name: 'Semantic Kernel', level: 75, years: '1+ years' },
        { name: 'Syncfusion', level: 80, years: '1+ years' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: [
        { name: 'Docker', level: 85, years: '2+ years' },
        { name: 'CI/CD', level: 80, years: '2+ years' },
        { name: 'Databricks', level: 80, years: '1+ years' },
        { name: 'Snowflake', level: 75, years: '1+ years' },
        { name: 'SSIS', level: 75, years: '1+ years' },
        { name: 'Git', level: 90, years: '2+ years' }
      ]
    },
    {
      title: 'Cloud & Databases',
      icon: Cloud,
      skills: [
        { name: 'Azure', level: 90, years: '2+ years' },
        { name: 'AWS', level: 50, years: '0.5 years' },
        { name: 'GCP', level: 50, years: '0.5 years' },
        { name: 'Vector DBs', level: 75, years: '1+ years' },
        { name: 'Cloud-Based AI Services', level: 80, years: '1+ years' },
        { name: 'SQL Server', level: 85, years: '2+ years' }
      ]
    }
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-[#1E1E1E] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7B4DFF] via-transparent to-[#00A3FF]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Technical{' '}
              <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full auto-rows-fr">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-[#121212] rounded-xl p-4 md:p-6 lg:p-8 border border-gray-700 hover:border-[#00A3FF] transition-all duration-300 w-full flex flex-col justify-between h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-start mb-4 md:mb-6 flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#00A3FF] to-[#7B4DFF] rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <category.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white leading-tight">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                          {skill.years}
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2 relative overflow-hidden mb-1.5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
                        </motion.div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div className="text-right">
                        <span className="text-xs md:text-sm text-[#00A3FF] font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {[
              {
                name: 'Microsoft Certified: Azure AI Engineer Associate',
                url: 'https://learn.microsoft.com/en-in/users/satyampandey-4377/credentials/1d44a97e401ba52a'
              },
              {
                name: 'Microsoft Certified: Azure Developer Associate',
                url: 'https://learn.microsoft.com/en-us/users/satyampandey-4377/credentials/6e3c617704ffeb72'
              },
              {
                name: 'Databricks Certified Data Engineer Associate',
                url: 'https://credentials.databricks.com/b30de506-df52-46ae-8c4d-e2d99384f7a7#acc.skBnUQMx'
              },
              {
                name: 'SnowPro Core Certification',
                url: 'https://achieve.snowflake.com/e13d02c5-f05a-4a57-a30c-a4f78761866c#acc.6FtdyR1x'
              },
              {
                name: 'Microsoft Certified: Fabric Analytics Engineer Associate',
                url: 'https://learn.microsoft.com/en-in/users/satyampandey-4377/credentials/8bfdbba277ca74a8'
              },
              {
                name: 'Microsoft Certified: Fabric Data Engineer Associate',
                url: 'https://learn.microsoft.com/en-in/users/satyampandey-4377/credentials/62850bb89e68751'
              }
            ].map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#121212] border border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all duration-300 cursor-pointer text-center block flex items-center justify-center min-h-[60px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {cert.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}