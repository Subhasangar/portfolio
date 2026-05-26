import { useEffect, useRef, useState } from 'react'

export const useParallax = (offset = 0.5) => {
  const ref = useRef(null)
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current
        const elementPosition = element.getBoundingClientRect().top
        const elementHeight = element.clientHeight
        const windowHeight = window.innerHeight

        // Calculate scroll progress
        const scrollProgress = (windowHeight - elementPosition) / (windowHeight + elementHeight)
        
        if (scrollProgress >= -0.5 && scrollProgress <= 1.5) {
          setYOffset(scrollProgress * 100 * offset)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return { ref, yOffset }
}

export const useScrollOpacity = () => {
  const ref = useRef(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Calculate opacity based on scroll position
        const scrollProgress = 1 - (elementPosition / windowHeight)
        const calculatedOpacity = Math.max(0, Math.min(1, scrollProgress + 0.2))
        
        setOpacity(calculatedOpacity)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { ref, opacity }
}
