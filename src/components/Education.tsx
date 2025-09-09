import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (BEng) Honours in Software Engineering with Industrial Placement',
      institution: 'University Of Westminster, London',
      year: '2020-2024',
      type: 'Bachelor\'s Degree',
      color: 'from-cyan-400 to-blue-500',
      featured: true
    },
    {
      degree: 'Foundation Certificate in Higher Education',
      institution: 'University Of Westminster, London',
      year: '2021-2022',
      type: 'Foundation',
      color: 'from-purple-400 to-pink-500'
    },
    {
      degree: 'GCE Advanced Level',
      institution: 'S.Thomas College, Bandarawela',
      year: '2019',
      type: 'A/L',
      color: 'from-green-400 to-emerald-500'
    },
    {
      degree: 'GCE Ordinary Level',
      institution: 'S.Thomas College, Bandarawela',
      year: '2016',
      type: 'O/L',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const certificates = [
    {
      name: 'Diploma in English',
      institution: 'Esoft Metro Campus',
      year: '2020',
      color: 'from-pink-400 to-purple-500'
    },
    {
      name: 'Certificate For Office 365',
      institution: 'Esoft Metro Campus', 
      year: '2020',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/3 w-48 h-48 border border-cyan-400/10 transform rotate-12"
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
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Featured Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-400">Bachelor's Degree</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Bachelor of Engineering (BEng) Honours in Software Engineering
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>University Of Westminster, London</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>2020-2024</span>
                  </div>
                </div>
                <p className="text-gray-300">
                  Honours degree with Industrial Placement, focusing on software engineering principles, 
                  modern development practices, and real-world industry experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {education.filter(edu => !edu.featured).map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group hover:bg-gray-700/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${edu.color} rounded-lg flex items-center justify-center`}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <span className={`text-xs font-medium bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.type}
                  </span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:bg-gray-700/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{cert.institution}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;