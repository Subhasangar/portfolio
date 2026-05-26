import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MdPhone, MdEmail, MdLocationOn, MdSend } from 'react-icons/md'
import { useParallax } from '../hooks/useParallax'
import ParallaxLayers from './ParallaxLayers'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <MdPhone className="text-3xl" />,
      title: 'Phone',
      content: '+91 8428487274',
      color: 'from-accent-dark to-accent-light',
    },
    {
      icon: <MdEmail className="text-3xl" />,
      title: 'Email',
      content: 'ssubhasangar@gmail.com',
      color: 'from-amber-700 to-accent',
    },
    {
      icon: <MdLocationOn className="text-3xl" />,
      title: 'Location',
      content: 'Available for remote work/prefer on-site also',
      color: 'from-stone-700 to-accent-light',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const { ref: parallaxRef, yOffset } = useParallax(0.35)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <motion.section
      id="contact"
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-bg min-h-screen py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-contact.svg')",
      }}
    >
      <div className="gold-shine" />
      <ParallaxLayers scrollY={scrollY} />

      {/* Parallax scroll background layer */}
      <motion.div
        animate={{
          y: scrollY * 0.5,
          opacity: 0.25,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-accent-dark/10"></div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: scrollY * 0.15,
        }}
        transition={{ duration: 9, repeat: Infinity, type: 'tween' }}
        className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [25, 0, 25],
          x: scrollY * -0.12,
        }}
        transition={{ duration: 11, repeat: Infinity, type: 'tween' }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-dark/12 rounded-full blur-3xl"
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
            <span className="premium-heading"> Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Let's get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 rounded-xl blur-lg group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-secondary to-primary p-8 rounded-xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <span className="text-white">{info.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                      <p className="text-gray-400">{info.content}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional info card */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light opacity-10 rounded-xl blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-primary p-8 rounded-xl border border-accent/30 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-3">Quick Response</h4>
                <p className="text-gray-400">I'll get back to you as soon as possible. Average response time is 24 hours.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-dark to-accent-light opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-secondary to-primary p-8 lg:p-10 rounded-2xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-white">
                <span className="text-accent">#</span> Send Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-96"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4"
                  >
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="text-gray-300 text-center text-lg">
                    <span className="text-accent font-bold">Thank you!</span><br/>
                    Your message has been sent successfully.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      variants={itemVariants}
                      className="relative"
                    >
                      <label className="block text-gray-300 mb-2 text-sm font-semibold">Name *</label>
                      <motion.input
                        whileFocus={{ borderColor: '#d9b76f', boxShadow: '0 0 20px rgba(217,183,111,0.24)' }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="relative"
                    >
                      <label className="block text-gray-300 mb-2 text-sm font-semibold">Email *</label>
                      <motion.input
                        whileFocus={{ borderColor: '#d9b76f', boxShadow: '0 0 20px rgba(217,183,111,0.24)' }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-gray-300 mb-2 text-sm font-semibold">Subject *</label>
                    <motion.input
                      whileFocus={{ borderColor: '#d9b76f', boxShadow: '0 0 20px rgba(217,183,111,0.24)' }}
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="What is this about?"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-gray-300 mb-2 text-sm font-semibold">Message *</label>
                    <motion.textarea
                      whileFocus={{ borderColor: '#d9b76f', boxShadow: '0 0 20px rgba(217,183,111,0.24)' }}
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Your message here..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217,183,111,0.45)' }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-accent-light text-primary py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <MdSend /> Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
