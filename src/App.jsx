import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white min-h-screen overflow-x-hidden"
    >
      <div className="fixed top-0 left-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none -z-10 animate-pulse" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App
