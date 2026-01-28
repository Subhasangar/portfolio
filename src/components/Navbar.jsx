import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className="bg-gradient-to-b from-secondary to-primary border-b border-accent/30 sticky top-0 z-50 backdrop-blur-xl bg-opacity-95 shadow-xl shadow-black/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black cursor-pointer"
          >
            <motion.span className="text-accent">&lt;</motion.span>
            <span className="bg-gradient-to-r from-accent via-accent-light to-cyan-400 bg-clip-text text-transparent">SUBHASANGAR</span>
            <motion.span className="text-accent">/ &gt;</motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-1"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={`#${item.id}`}
                whileHover={{ y: -3 }}
                className="relative group px-4 py-2 text-white text-sm font-semibold transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom line */}
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="md:hidden text-accent text-3xl p-2 hover:bg-accent/10 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className="mt-4 space-y-2 pb-4 border-t border-accent/20 pt-4"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={`#${item.id}`}
                whileHover={{ x: 10, color: '#39ff14' }}
                className="block px-4 py-2 text-white text-sm font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent font-bold">#</span> {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-left"
      />
    </motion.nav>
  )
}
