"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const companies = [
    {
      name: "Banco BS2",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bs2-MWvZmy9BSkdyPHplo5S4U5rF8o3PiM.png",
      bgColor: "bg-[#0033A0]",
      padding: "p-0.5",
      size: "w-16 h-16",
      customStyle: "rounded-md",
    },
    {
      name: "Grupo Boticário",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boti-yAejTKkjDBCXL1pncttrWvJOhQqbo9.png",
      bgColor: "bg-white",
      padding: "p-2.5",
      size: "w-14 h-14",
    },
    {
      name: "Itaú",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itaunew-pNgfIUbX2WCfKqOuEc3bxMpdObDeNP.png",
      bgColor: "bg-[#EC7000]",
      padding: "p-0",
      size: "w-16 h-16",
      customStyle: "rounded-lg scale-130",
    },
    {
      name: "Santander",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/santander-xTt7RJqbDJy9zVZATLdqeJo9EegomB.png",
      bgColor: "bg-white",
      padding: "p-3",
      size: "w-14 h-14",
    },
  ]

  const scrollToFeaturedWorks = () => {
    const featuredWorksSection = document.querySelector("#featured-works")
    if (featuredWorksSection) {
      featuredWorksSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/profile-photo.jpg"
            alt="Robson Ramos"
            className="h-40 w-40 rounded-full object-cover border-4 border-white/10"
          />
        </motion.div>
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ROBSON RAMOS
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >Liderança em Design e Produto - UX Strategy - 
        IA & Automação - Experiências Escaláveis
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden ${company.bgColor}`}
              >
                <div className={`${company.padding} ${company.size} ${company.customStyle || ""}`}>
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-xs text-gray-400 mt-2">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Blinking scroll arrow */}
        <motion.div
          className="absolute bottom-10 cursor-pointer"
          onClick={scrollToFeaturedWorks}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </div>
    </div>
  )
}
