import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'QUADEXA',
      period: '12/2024 - 08/2025',
      location: 'Current Position',
      description: 'Developing modern web applications and maintaining existing systems.',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Mobile Application Developer',
      company: 'APEX TECHNOLOGIES',
      period: '2023 - 2024',
      location: 'Previous Role',
      description: 'Developed mobile applications using modern frameworks and technologies.',
      technologies: ['Kotlin', 'Android', 'Mobile Development', 'UI/UX'],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-cyan-400/5 transform rotate-45"
        />
      </div>

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
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className={`relative ${index % 2 === 0 ? 'md:ml-16' : 'md:ml-16 md:pl-16'}`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                    className="absolute left-[-2rem] top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hidden md:block"
                  />

                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotate: index % 2 === 0 ? 1 : -1,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-700/40 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-300 mb-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + techIndex * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 border border-current border-opacity-30 rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;