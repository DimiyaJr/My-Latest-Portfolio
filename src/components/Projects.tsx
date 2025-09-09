import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HireVision',
      year: '2023',
      description: 'A comprehensive hiring platform that made it to the top 10 projects in Ideasprint. Features advanced candidate screening and management systems.',
      technologies: ['React', 'Machine Learning', 'Python'],
      highlight: 'Top 10 in Ideasprint',
      color: 'from-cyan-400 to-blue-500',
      featured: true
    },
    {
      title: 'Latex Weighing Mobile App',
      year: '2024',
      description: 'Final year project implementing a mobile application for latex weighing with IoT integration and machine learning capabilities.',
      technologies: ['Kotlin', 'Arduino', 'Machine Learning'],
      highlight: 'Final Year Project',
      color: 'from-purple-400 to-pink-500',
      featured: true
    },
    {
      title: 'Ceylon Stage Ticketing Site',
      year: '2025',
      description: 'WooCommerce-based ticketing platform for events in the USA, featuring payment integration and event management.',
      technologies: ['WordPress', 'WooCommerce'],
      highlight: 'Live Production',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Inventory Management System',
      year: '2025',
      description: 'Full-stack inventory management solution with real-time tracking and analytics dashboard.',
      technologies: ['React', 'Node.js'],
      highlight: 'Full-Stack',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Skin Consultation Centre System',
      year: '2022',
      description: 'Desktop application for managing skin consultation appointments and patient records.',
      technologies: ['Java', 'GUI'],
      highlight: 'Desktop App',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Cruise Ship Boarding System',
      year: '2022',
      description: 'Management system for cruise ship passenger boarding and cabin allocation.',
      technologies: ['Java'],
      highlight: 'Management System',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 transform skew-y-2 origin-top-left" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.3, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:bg-gray-700/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                      <span className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-gray-400 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>
                  <Code className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + techIndex * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current border-opacity-30 rounded-full text-xs font-medium text-white`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group hover:bg-gray-700/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full`} />
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                <Code className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover highlight */}
              <span className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;