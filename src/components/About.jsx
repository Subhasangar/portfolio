import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa'
import { useParallax } from '../hooks/useParallax'
import ParallaxLayers from './ParallaxLayers'

export default function About() {
  const timelineItems = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Engineering (ECE)',
      description: 'Studied electronics and communication engineering with a strong focus on digital systems, signal processing, and embedded systems.',
      delay: 0.1,
    },
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'Specialized in building end-to-end web applications using Java, HTML, CSS, JavaScript, React, and MySQL databases.',
      delay: 0.2,
    },
    {
      icon: <FaLaptopCode />,
      title: 'Software Engineering',
      description: 'Proficient in creating scalable, maintainable solutions with emphasis on clean code, system design, and problem-solving.',
      delay: 0.3,
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const { ref: parallaxRef, yOffset } = useParallax(0.4)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.section
      id="about"
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-bg min-h-screen py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-about.svg')",
      }}
    >
      <div className="gold-shine" />
      <ParallaxLayers scrollY={scrollY} />

      {/* Parallax background layers */}
      <motion.div
        animate={{ y: scrollY * 0.5, opacity: 0.3 }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent"></div>
      </motion.div>

      {/* Animated background elements with parallax */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: scrollY * 0.2,
        }}
        transition={{ duration: 8, repeat: Infinity, type: 'tween' }}
        className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [30, 0, 30],
          x: scrollY * -0.15,
        }}
        transition={{ duration: 10, repeat: Infinity, type: 'tween' }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-accent">#</span>
            <span className="premium-heading"> About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full Stack Developer with a passion for creating beautiful, functional web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {/* Left side - Main intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Gradient border box */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light opacity-20 rounded-2xl blur-lg"></div>

              <div className="relative bg-gradient-to-br from-secondary to-primary border border-accent/30 rounded-2xl p-8 lg:p-10 backdrop-blur-sm">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-4 text-white"
                >
                  Hey, I'm <span className="text-accent">SUBHASANGAR S</span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                >
                  I'm a Full Stack Developer passionate about building modern, scalable web applications. With a background in Electronics and Communication Engineering, I blend technical expertise with creative problem-solving to create exceptional digital experiences.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 leading-relaxed"
                >
                  My journey in web development has equipped me with strong fundamentals in both frontend and backend technologies. I'm committed to writing clean, maintainable code and continuously learning new technologies to stay ahead in the rapidly evolving tech landscape.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            {[
              { label: 'Experience', value: '3+ Years' },
              { label: 'Projects', value: '5+' },
              { label: 'Skills', value: '7+' },
              { label: 'Focus', value: 'Full Stack' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-secondary border border-accent/30 rounded-lg p-4 text-center backdrop-blur-sm">
                  <p className="text-accent font-bold text-2xl mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            <span className="text-accent">#</span> Journey
          </motion.h3>

          <div className="relative">
            {/* Center line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/50 via-accent to-accent/50"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:flex-1">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-secondary border border-accent/20 rounded-xl p-6 lg:p-8 hover:border-accent/50 transition-all duration-300">
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon - appears on center line on desktop, inline on mobile */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg shadow-accent/50 hidden lg:flex"
                  >
                    <span className="text-2xl text-primary">{item.icon}</span>
                  </motion.div>

                  {/* Empty space for alignment on desktop */}
                  <div className="hidden lg:flex-1 lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
