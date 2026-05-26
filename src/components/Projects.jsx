import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import { useParallax } from '../hooks/useParallax'
import ParallaxLayers from './ParallaxLayers'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const projectsRef = useRef(null)
  const { ref: parallaxRef, yOffset } = useParallax(0.4)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovering || !projectsRef.current) return
      const rect = projectsRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
      setMousePosition({ x, y })
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
  }, [isHovering])

  const projects = [
    {
      id: 1,
      title: 'Kid-Zooom',
      description:
        'Kid-Zooom is an interactive and educational website designed for kids. The platform focuses on engaging UI, colorful animations, and simple navigation to help children explore learning content in a fun way.',
      image: '/images/Project1.JPG',
      tech: 'HTML, CSS, JavaScript, React',
      type: 'Front-End & Back-End Web Application',
      status: 'Live Project',
      link: 'https://kid-zooom.vercel.app/',
      gradient: 'from-accent-dark to-accent-light',
    },
    {
      id: 2,
      title: 'Kid-Zooom',
      description:
        'Kid-Zooom is an interactive and educational website designed for kids. The platform focuses on engaging UI, colorful animations, and simple navigation to help children explore learning content in a fun way.',
      image: '/images/Project2.JPG',
      tech: 'HTML, CSS, JavaScript, React',
      type: 'Front-End & Back-End Web Application',
      status: 'Live Project',
      link: 'https://kid-zooom.vercel.app/',
      gradient: 'from-accent-dark to-accent-light',
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
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  return (
    <motion.section
      id="projects"
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-bg min-h-screen py-20 relative overflow-hidden perspective"
      style={{
        backgroundImage: "url('/images/bg-projects.svg')",
      }}
    >
      <div className="gold-shine" />
      <ParallaxLayers scrollY={scrollY} />

      {/* Parallax scroll background layer */}
      <motion.div
        animate={{
          y: scrollY * 0.6,
          opacity: 0.2,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/8 via-transparent to-transparent"></div>
      </motion.div>

      {/* Parallax animated background elements */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: isHovering ? mousePosition.x * 15 : scrollY * 0.1,
        }}
        transition={{ duration: 12, repeat: Infinity, type: 'tween' }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: isHovering ? mousePosition.y * -20 : [30, 0, 30],
          x: isHovering ? mousePosition.x * -20 : scrollY * -0.08,
        }}
        transition={{ duration: 14, repeat: Infinity, type: 'tween' }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-accent-dark/12 rounded-full blur-3xl"
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
            <span className="premium-heading"> Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my best work and innovative solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto" ref={projectsRef}>
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 250, damping: 25 },
                opacity: { duration: 0.5 },
                rotateY: { type: 'spring', stiffness: 200, damping: 20 },
              }}
              custom={1}
              onHoverStart={() => {
                setAutoPlay(false)
                setIsHovering(true)
              }}
              onHoverEnd={() => {
                setAutoPlay(true)
                setIsHovering(false)
                setMousePosition({ x: 0, y: 0 })
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient border effect with parallax */}
              <motion.div
                animate={{
                  rotateX: isHovering ? mousePosition.y * 5 : 0,
                  rotateY: isHovering ? mousePosition.x * 5 : 0,
                }}
                transition={{ type: 'spring', damping: 15, mass: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-300`}
              ></motion.div>

              <motion.div
                animate={{
                  rotateX: isHovering ? mousePosition.y * 3 : 0,
                  rotateY: isHovering ? mousePosition.x * 3 : 0,
                }}
                transition={{ type: 'spring', damping: 20, mass: 0.5 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-secondary to-primary p-8 lg:p-12 rounded-2xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 backdrop-blur-sm shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Project Image with 3D depth */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, z: -100 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative overflow-hidden rounded-xl border-2 border-accent/40 group-hover:border-accent/80 transition-all duration-300 shadow-lg"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{
                      rotateX: isHovering ? mousePosition.y * 2 : 0,
                      rotateY: isHovering ? mousePosition.x * 2 : 0,
                    }}
                    transition={{ type: 'spring', damping: 25, mass: 0.7 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
                    style={{ transformStyle: 'preserve-3d' }}
                  ></motion.div>

                  <motion.img
                    whileHover={{ scale: 1.12, rotateX: 2, rotateY: 2 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg"
                    loading="lazy"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                </motion.div>

                {/* Project Content with parallax text */}
                <motion.div
                  initial={{ opacity: 0, x: 50, z: -50 }}
                  animate={{ opacity: 1, x: 0, z: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="space-y-6"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                    animate={{
                      opacity: 1,
                      y: isHovering ? mousePosition.y * 3 : 0,
                    }}
                    className="text-4xl lg:text-5xl font-black premium-heading leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.35 }}
                    animate={{
                      opacity: 1,
                      y: isHovering ? mousePosition.y * 2 : 0,
                    }}
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
                      whileHover={{
                        x: 12,
                        borderColor: '#d9b76f',
                        boxShadow: '0 0 20px rgba(217,183,111,0.24)',
                      }}
                      animate={{
                        x: isHovering ? mousePosition.x * 2 : 0,
                      }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm">
                        <span className="text-accent font-bold">Tech Stack</span>
                      </p>
                      <p className="text-gray-200">{project.tech}</p>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        x: 12,
                        borderColor: '#d9b76f',
                        boxShadow: '0 0 20px rgba(217,183,111,0.24)',
                      }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm">
                        <span className="text-accent font-bold">Project Type</span>
                      </p>
                      <p className="text-gray-200">{project.type}</p>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        x: 12,
                        borderColor: '#d9b76f',
                        boxShadow: '0 0 20px rgba(217,183,111,0.24)',
                      }}
                      className="border-l-2 border-accent/50 pl-4 transition-all duration-300"
                    >
                      <p className="text-gray-400 text-sm">
                        <span className="text-accent font-bold">Status</span>
                      </p>
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
                      whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 40px rgba(217,183,111,0.5)',
                        rotateY: 5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-accent to-accent-light text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <span>Live Demo</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MdArrowForward />
                      </motion.span>
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.08,
                        borderColor: '#d9b76f',
                        backgroundColor: 'rgba(217,183,111,0.16)',
                        boxShadow: '0 0 30px rgba(217,183,111,0.34)',
                        rotateY: -5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      Visit Website
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Counter with parallax */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{
              y: isHovering ? mousePosition.y * 5 : 0,
            }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-secondary border border-accent/30 rounded-lg hover:border-accent/70 transition-all duration-300 shadow-lg"
          >
            <span className="text-gray-400">Project</span>
            <motion.span
              key={currentIndex}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-accent font-bold text-xl"
            >
              {currentIndex + 1}
            </motion.span>
            <span className="text-gray-400">of</span>
            <span className="text-accent font-bold text-xl">{projects.length}</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
