import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Calculator, Users, ChevronDown } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, name: 'Object Oriented Programming', color: 'text-cyan-400' },
    { icon: Database, name: 'Database Management', color: 'text-purple-400' },
    { icon: Globe, name: 'Website Development', color: 'text-green-400' },
    { icon: Smartphone, name: 'Mobile Developing', color: 'text-pink-400' },
    { icon: Calculator, name: 'Mathematics of Computing', color: 'text-yellow-400' },
    { icon: Users, name: 'WordPress', color: 'text-blue-400' }
  ];

  const languages = ['Sinhala', 'English'];

  // ✅ Scroll function defined
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 transform -skew-y-2 origin-top-left" />
      
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Efficient and well-organized Software Engineering enthusiast with experience in 
                file management, code validation, and programming in Java, Python, and JavaFX. 
                Skilled in code testing, HTML, and providing effective clerical and administrative support.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Adaptable and committed to meeting the dynamic needs of modern development environments, 
                with a passion for creating innovative solutions and learning new technologies.
              </p>
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <motion.span
                    key={language}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border border-purple-400/30 rounded-full text-sm font-medium text-gray-200"
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:bg-gray-700/40 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full" />
                    </motion.div>
                    <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-cyan-400/30 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-45"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-200" />
      </motion.button>
    </section>
  );
};

export default About;
