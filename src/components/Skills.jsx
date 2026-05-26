import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaJava,
  FaJs,
  FaDatabase,
  FaTools,
  FaReact,
  FaLeaf,
  FaBrain,
} from 'react-icons/fa'
import { useParallax } from '../hooks/useParallax'
import ParallaxLayers from './ParallaxLayers'

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringSkills, setIsHoveringSkills] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { ref: parallaxRef, yOffset } = useParallax(0.35)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHoveringSkills) return
      const { clientX, clientY } = e
      const container = document.getElementById('skills-container')
      if (container) {
        const rect = container.getBoundingClientRect()
        const x = ((clientX - rect.left) / rect.width) * 2 - 1
        const y = ((clientY - rect.top) / rect.height) * 2 - 1
        setMousePosition({ x, y })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHoveringSkills])

  const ledSkills = ['Java', 'Spring Boot', 'React', 'MySQL', 'AI Smart Coding']

  const skills = [
    {
      name: 'Java',
      description: 'Object-oriented programming, data structures, and algorithms',
      icon: <FaJava className="text-3xl" />,
      color: 'from-accent-dark to-accent-light',
      level: 90,
    },
    {
      name: 'Spring Boot',
      description: 'Production-ready Java APIs, services, and backend architecture',
      icon: <FaLeaf className="text-3xl" />,
      color: 'from-amber-700 to-accent',
      level: 88,
    },
    {
      name: 'React',
      description: 'Component-based interfaces, hooks, and polished UI workflows',
      icon: <FaReact className="text-3xl" />,
      color: 'from-stone-500 to-accent-light',
      level: 92,
    },
    {
      name: 'MySQL',
      description: 'Database design, queries, optimization, and reliable data handling',
      icon: <FaDatabase className="text-3xl" />,
      color: 'from-yellow-700 to-accent-light',
      level: 88,
    },
    {
      name: 'AI Smart Coding',
      description: 'AI-assisted development, faster iteration, and smarter problem solving',
      icon: <FaBrain className="text-3xl" />,
      color: 'from-accent to-yellow-200',
      level: 85,
    },
    {
      name: 'JavaScript',
      description: 'Modern browser logic, interactive features, and clean web behavior',
      icon: <FaJs className="text-3xl" />,
      color: 'from-stone-700 to-accent',
      level: 87,
    },
    {
      name: 'Full Stack',
      description: 'End-to-end web development and system architecture',
      icon: <FaTools className="text-3xl" />,
      color: 'from-accent-dark to-yellow-100',
      level: 89,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="skills"
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-bg min-h-screen py-20 relative overflow-hidden perspective"
      style={{
        backgroundImage: "url('/images/bg-skills.svg')",
      }}
    >
      <div className="gold-shine" />
      <ParallaxLayers scrollY={scrollY} />

      {/* Parallax background layers */}
      <motion.div
        animate={{
          y: scrollY * 0.5,
          opacity: 0.25,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5"></div>
      </motion.div>

      {/* Parallax background layers */}
      <motion.div
        animate={{
          y: mousePosition.y * 30,
          x: mousePosition.x * 20,
        }}
        transition={{ type: 'spring', damping: 20, mass: 0.5 }}
        className="absolute top-0 left-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: mousePosition.y * -40,
          x: mousePosition.x * -30,
          scale: 1 + scrollY * 0.0001,
        }}
        transition={{ type: 'spring', damping: 20, mass: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl"
      ></motion.div>

      <div
        id="skills-container"
        className="container mx-auto px-4 relative z-20"
        onMouseEnter={() => setIsHoveringSkills(true)}
        onMouseLeave={() => {
          setIsHoveringSkills(false)
          setMousePosition({ x: 0, y: 0 })
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-accent">#</span>
            <span className="premium-heading"> Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium stack for building secure, scalable, and intelligent web products
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="skills-led mb-12 max-w-6xl mx-auto"
        >
          <div className="skills-led__track">
            {[...ledSkills, ...ledSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="skills-led__item">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 35px 60px rgba(217, 183, 111, 0.28)',
              }}
              transition={{ duration: 0.4 }}
              className="relative group h-full"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-xl h-full`}>
                <div className="bg-secondary p-6 rounded-xl h-full transition-all duration-300 group-hover:bg-secondary/80 flex flex-col">
                  {/* Icon with 3D rotation */}
                  <motion.div
                    whileHover={{ rotateX: 180, scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-2xl transition-all shadow-lg`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <span className="text-white text-3xl">{skill.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold mb-2 text-white"
                  >
                    {skill.name}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{skill.description}</p>

                  {/* Skill Level Bar */}
                  <div className="mb-4 mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Proficiency</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-bold text-sm"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full h-2.5 bg-primary rounded-full overflow-hidden border border-accent/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${skill.color} shadow-lg shadow-accent/50`}
                      />
                    </div>
                  </div>

                  {/* Bottom accent line with parallax effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full origin-left shadow-lg shadow-accent/40`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
