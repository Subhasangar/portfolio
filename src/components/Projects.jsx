import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const projects = [
    {
      id: 1,
      title: 'Kid-Zooom',
      description:
        'Kid-Zooom is an interactive and educational website designed for kids. The platform focuses on engaging UI, colorful animations, and simple navigation to help children explore learning content in a fun way.',
      image: './images/project1.jpg',
      tech: 'HTML, CSS, JavaScript, React',
      type: 'Front-End & Back-End Web Application',
      status: 'Live Project',
      link: 'https://kid-zooom.vercel.app/',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ]

  const project = projects[currentIndex]

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [autoPlay, projects.length])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-primary to-secondary relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [30, 0, 30] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-accent">#</span>
            <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent"> Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my best work and innovative solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              custom={1}
              onHoverStart={() => setAutoPlay(false)}
              onHoverEnd={() => setAutoPlay(true)}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}></div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-secondary to-primary p-8 lg:p-12 rounded-2xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 backdrop-blur-sm">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-xl border-2 border-accent/40 group-hover:border-accent/80 transition-all duration-300"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></motion.div>
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </motion.div>

                {/* Project Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-accent to-accent-light bg-clip-text text-transparent leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="text-gray-300 leading-relaxed text-lg"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-3 pt-4"
                  >
                    <motion.div
                      whileHover={{ x: 10, borderColor: '#39ff14' }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm"><span className="text-accent font-bold">Tech Stack</span></p>
                      <p className="text-gray-200">{project.tech}</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, borderColor: '#39ff14' }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm"><span className="text-accent font-bold">Project Type</span></p>
                      <p className="text-gray-200">{project.type}</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, borderColor: '#39ff14' }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm"><span className="text-accent font-bold">Status</span></p>
                      <p className="text-accent font-semibold">{project.status}</p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-2"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(57,255,20,0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-accent to-accent-light text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MdArrowForward />
                      </motion.span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, borderColor: '#39ff14', backgroundColor: 'rgba(57,255,20,0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-center"
                    >
                      Visit Website
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary border border-accent/30 rounded-lg">
            <span className="text-gray-400">Project</span>
            <span className="text-accent font-bold text-xl">{currentIndex + 1}</span>
            <span className="text-gray-400">of</span>
            <span className="text-accent font-bold text-xl">{projects.length}</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
