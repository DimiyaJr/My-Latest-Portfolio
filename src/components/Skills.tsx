import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'Kotlin', 'HTML/CSS'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'JavaFX', 'Node.js', 'WordPress'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'Database Management', 'Code Testing', 'Version Control'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Specialized Areas',
      skills: ['Mobile Development', 'Machine Learning', 'Arduino', 'OOP'],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-purple-500/10 transform rotate-45"
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
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: categoryIndex * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                rotate: 2,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group"
            >
              <h3 className={`text-lg font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group/skill"
                  >
                    <motion.div
                      className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: skillIndex * 0.3
                      }}
                    />
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;