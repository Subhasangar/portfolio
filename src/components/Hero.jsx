import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-primary pt-20 overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
                👋 Welcome to My Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-accent to-accent-light bg-clip-text text-transparent">
                SUBHASANGAR
              </span>
              <motion.span
                className="block text-accent glow-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg font-light"
            >
              Crafting beautiful, scalable web solutions with modern technologies. Specializing in React, Java, and cutting-edge web development practices.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-accent to-accent-light text-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 border-glow"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, borderColor: '#39ff14', boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                href="#skills"
                className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold hover:bg-accent/10 transition-all duration-300"
              >
                View My Skills
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-8 justify-center lg:justify-start flex-wrap"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">7+</div>
                <div className="text-gray-400 text-sm">Tech Skills</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-transparent border-t-accent border-r-accent border-b-accent/30 rounded-full"
              />

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border-2 border-accent/40 rounded-full"
              />

              {/* Inner circle with gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border-2 border-gradient-to-r from-accent/50 to-accent rounded-full"
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center border border-accent/30 border-glow"
                >
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-7xl lg:text-8xl text-accent drop-shadow-lg"
                  >
                    <FaCode />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-sm"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  )
}
