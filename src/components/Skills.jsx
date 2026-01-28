import React from 'react'
import { motion } from 'framer-motion'
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaTools,
  FaReact,
} from 'react-icons/fa'

export default function Skills() {
  const skills = [
    {
      name: 'Java',
      description: 'Object-oriented programming, data structures, and algorithms',
      icon: <FaJava className="text-3xl" />,
      color: 'from-orange-500 to-orange-600',
      level: 90,
    },
    {
      name: 'HTML5',
      description: 'Semantic markup, accessibility, and modern web standards',
      icon: <FaHtml5 className="text-3xl" />,
      color: 'from-red-500 to-orange-500',
      level: 95,
    },
    {
      name: 'CSS3',
      description: 'Responsive design, flexbox, grid, and modern styling',
      icon: <FaCss3Alt className="text-3xl" />,
      color: 'from-blue-500 to-cyan-500',
      level: 92,
    },
    {
      name: 'JavaScript',
      description: 'ES6+, DOM manipulation, and interactive web features',
      icon: <FaJs className="text-3xl" />,
      color: 'from-yellow-400 to-yellow-600',
      level: 88,
    },
    {
      name: 'React',
      description: 'Component-based architecture, hooks, and state management',
      icon: <FaReact className="text-3xl" />,
      color: 'from-cyan-400 to-blue-500',
      level: 85,
    },
    {
      name: 'MySQL',
      description: 'Database design, queries, optimization, and management',
      icon: <FaDatabase className="text-3xl" />,
      color: 'from-blue-600 to-indigo-600',
      level: 87,
    },
    {
      name: 'Full Stack',
      description: 'End-to-end web development and system architecture',
      icon: <FaTools className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
      level: 89,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-primary to-secondary relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-accent">#</span>
            <span className="bg-gradient-to-r from-white via-accent to-accent-light bg-clip-text text-transparent"> Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px rgba(57, 255, 20, 0.2)',
              }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-xl`}>
                <div className="bg-secondary p-6 rounded-xl h-full transition-all duration-300 group-hover:bg-secondary/80">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all`}
                  >
                    <span className="text-white">{skill.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{skill.name}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>

                  {/* Skill Level Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Proficiency</span>
                      <span className="text-accent font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${skill.color} rounded-full origin-left`}
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
