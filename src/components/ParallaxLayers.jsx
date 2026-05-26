import React from 'react'
import { motion } from 'framer-motion'

export default function ParallaxLayers({ scrollY = 0, variant = 'default' }) {
  const accentShift = variant === 'hero' ? 0.08 : 0

  return (
    <div className="parallax-depth" aria-hidden="true">
      <motion.div
        className="parallax-depth__dust"
        animate={{
          y: scrollY * -0.08,
          x: scrollY * 0.025,
        }}
        transition={{ type: 'spring', damping: 42, mass: 0.7 }}
      />
      <motion.div
        className="parallax-depth__rings"
        animate={{
          y: scrollY * -0.14,
          x: scrollY * 0.035,
          rotate: scrollY * 0.01,
          opacity: 0.28 + accentShift,
        }}
        transition={{ type: 'spring', damping: 46, mass: 0.75 }}
      />
      <motion.div
        className="parallax-depth__mesh"
        animate={{
          y: scrollY * -0.24,
          x: scrollY * -0.035,
        }}
        transition={{ type: 'spring', damping: 48, mass: 0.8 }}
      />
      <motion.div
        className="parallax-depth__ribbon"
        animate={{
          y: scrollY * -0.32,
          x: scrollY * 0.08,
          rotate: -8 + scrollY * 0.006,
        }}
        transition={{ type: 'spring', damping: 50, mass: 0.8 }}
      />
    </div>
  )
}
