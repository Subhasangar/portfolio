import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const TRAIL_COUNT = 12

export default function CursorTracer() {
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  )
  const trailRef = useRef(trail)
  const targetRef = useRef(position)

  useEffect(() => {
    setMounted(true)

    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canUseCursor) return undefined

    setEnabled(true)

    const handlePointerMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY }
      setPosition(targetRef.current)
    }

    const animate = () => {
      const nextTrail = trailRef.current.map((point, index) => {
        const leader = index === 0 ? targetRef.current : trailRef.current[index - 1]
        const ease = 0.34 - index * 0.012
        return {
          x: point.x + (leader.x - point.x) * ease,
          y: point.y + (leader.y - point.y) * ease,
        }
      })

      trailRef.current = nextTrail
      setTrail(nextTrail)
      frame = window.requestAnimationFrame(animate)
    }

    let frame = window.requestAnimationFrame(animate)
    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled || !mounted) return null

  return createPortal(
    <div className="cursor-tracer" aria-hidden="true">
      <span
        className="cursor-tracer__halo"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <span
        className="cursor-tracer__core"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {trail.map((point, index) => (
        <span
          key={index}
          className="cursor-tracer__spark"
          style={{
            opacity: Math.max(0, 0.68 - index * 0.048),
            transform: `translate3d(${point.x}px, ${point.y}px, 0) scale(${1 - index * 0.045})`,
          }}
        />
      ))}
    </div>,
    document.body
  )
}
