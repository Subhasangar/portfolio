import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useParallax } from '../hooks/useParallax'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [scrollY, setScrollY] = useState(0)
  const { ref: parallaxRef, yOffset } = useParallax(0.3)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: 'https://github.com/Subhasangar', label: 'GitHub', color: 'from-gray-600 to-gray-700' },
    { icon: <FaLinkedin className="text-xl" />, url: 'https://www.linkedin.com/in/s-subhasangar-13ab5a356', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
    { icon: <FaTwitter className="text-xl" />, url: '#', label: 'Twitter', color: 'from-cyan-500 to-blue-500' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-bg border-t border-accent/30 relative overflow-hidden pt-16 pb-8"
      style={{
        backgroundImage: "url('/images/bg-contact.svg')",
      }}
    >
      {/* Parallax scroll background layer */}
      <motion.div
        animate={{
          y: scrollY * 0.4,
          opacity: 0.15,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/8 to-transparent"></div>
      </motion.div>

      {/* Background decoration */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: scrollY * 0.1,
        }}
        transition={{ duration: 10, repeat: Infinity, type: 'tween' }}
        className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black inline-block"
            >
              <span className="text-accent">&lt;</span>
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">SUBHASANGAR</span>
              <span className="text-accent">/ &gt;</span>
            </motion.div>
            <p className="text-gray-400 text-sm mt-3">Full Stack Developer | React Specialist</p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Building amazing digital experiences with code and creativity
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-2"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map((link, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-end space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={link.url}
                  title={link.label}
                  whileHover={{ scale: 1.15, y: -8, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-8 origin-left"
        />

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} <span className="text-accent font-semibold">Subhasangar S</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed & Built with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 inline-block"
            >
              ❤️
            </motion.span> using <span className="text-accent">React</span> & <span className="text-accent-light">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
