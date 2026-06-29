import { useRef, useEffect } from 'react'

const Particles = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random(),
      opacitySpeed: Math.random() * 0.02 + 0.005,
      opacityDirection: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.5
        ? `rgba(147,197,253,`   // blue-300
        : `rgba(253,186,116,`   // orange-300
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        // twinkle
        p.opacity += p.opacitySpeed * p.opacityDirection
        if (p.opacity >= 1) { p.opacity = 1; p.opacityDirection = -1 }
        if (p.opacity <= 0) { p.opacity = 0; p.opacityDirection = 1 }

        // drift
        p.x += p.speedX
        p.y += p.speedY

        // wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // draw star/glitter
        ctx.save()
        ctx.globalAlpha = p.opacity

        // outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        glow.addColorStop(0, `${p.color}0.8)`)
        glow.addColorStop(1, `${p.color}0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fill()

        // bright core
        ctx.fillStyle = `${p.color}1)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2] pointer-events-none"
    />
  )
}

export default Particles