import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Diagonal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -200, rotate: -45 }}
          animate={{ x: 0, rotate: -45 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-transparent transform -translate-x-48 -translate-y-48"
        />
        <motion.div
          initial={{ x: 200, rotate: 45 }}
          animate={{ x: 0, rotate: 45 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent transform translate-x-48 translate-y-48"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="block">DIMAN</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  RANDISA
                </span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Software Engineer
              </motion.p>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Efficient and well-organized Software Engineering enthusiast with experience in 
              full-stack development, mobile applications, and cutting-edge technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:dimanrandisa@gmail.com"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-400/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href="https://github.com/DimiyaJr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="lg:justify-self-end"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+94715159969</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>dimanrandisa@gmail.com</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span>Athurugiriya</span>
                </motion.div>
                
                <motion.a
                  href="https://www.linkedin.com/in/diman-randisa-7048b3282"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, color: '#0ea5e9' }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/DimiyaJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, color: '#10b981' }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-green-400" />
                  <span>GitHub Profile</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
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
      </div>
    </section>
  );
};

export default Hero;