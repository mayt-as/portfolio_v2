'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Filter } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProjectsSectionProps {
  setActiveSection: (section: string) => void;
}

export default function ProjectsSection({ setActiveSection }: ProjectsSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px 0px'
  });

  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: 'https://github.com/satyampandey/ecommerce-app',
      liveUrl: 'https://satyampandey-ecommerce.vercel.app'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, team collaboration, and project tracking.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
      githubUrl: 'https://github.com/satyampandey/task-manager',
      liveUrl: 'https://satyampandey-tasks.vercel.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, weather maps, and historical data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/satyampandey/weather-dashboard',
      liveUrl: 'https://satyampandey-weather.vercel.app'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Social networking application with user profiles, posts, comments, likes, and real-time messaging.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/satyampandey/social-media-platform',
      liveUrl: 'https://satyampandey-social.vercel.app'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and experience with modern design and animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/satyampandey/portfolio-v2',
      liveUrl: 'https://satyampandey.dev'
    },
    {
      id: 6,
      title: 'Blog Management System',
      description: 'Content management system for blogs with rich text editor, categories, tags, and user management.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack',
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap'],
      githubUrl: 'https://github.com/satyampandey/blog-management-system',
      liveUrl: 'https://satyampandey-blog.herokuapp.com'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Web App', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-[#121212] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B4DFF] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A3FF] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work spanning web development, full-stack applications, and innovative solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] text-white'
                  : 'border-gray-600 text-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-700 hover:border-[#00A3FF] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <SiGithub className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#00A3FF] to-[#7B4DFF] text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00A3FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#121212] text-gray-300 text-xs rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-[#00A3FF] hover:text-white hover:border-[#00A3FF] transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}