"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, User } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  relationship: string
  bgColor: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mike Oliveira",
      role: "Tech Lead | Frontend | Angular | Javascript | Typescript | Leadership",
      text: "Um profissional ímpar com uma visão estratégica e comunicação muito eficientes. Nas demandas em que atuamos juntos foi evidente o entusiasmo e facilidade em engajar os profissionais ao redor, movimentando todos para alcançar o objetivo determinado.",
      relationship: "Trabalhou com Robson na mesma equipe",
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      name: "Antonio Azevedo",
      role: "Founder, CEO @ LogiGo Connected Mobility",
      text: "Um cara de destaque, diferenciado! Com toda certeza trará diferenciação para o produto/serviço que desenvolver.",
      relationship: "Era sênior em relação a Robson",
      bgColor: "bg-purple-600",
    },
    {
      id: 3,
      name: "Altair Pereira Santos",
      role: "UX/UI Designer | Design System | Figma | Adobe Creative Suite",
      text: "Trabalhamos juntos na produtora New Content (hoje Accenture) e posso dizer que Robson é um designer excepcional. Pontual, espírito de equipe e além da vontade de sempre querer aprender mais, Robson também gosta de compartilhar conhecimento.",
      relationship: "Trabalhou com Robson na mesma equipe",
      bgColor: "bg-emerald-600",
    },
    {
      id: 4,
      name: "Alex Mathias",
      role: "DesignOps, Product Designer, UX Designer, Service Designer",
      text: "Trabalhar com o Robson foi uma grata surpresa e um enorme prazer. Ele exerce uma liderança presente, empática e estrategicamente consistente tanto às pessoas quanto aos objetivos do negócio. Com olhar sensível para identificar talentos e potencializar as forças de cada integrante do time, cria um ambiente de confiança, segurança psicológica e colaboração genuína.",
      relationship: "Respondeu a Robson",
      bgColor: "bg-amber-600",
    },
    {
      id: 5,
      name: "Alfredo Miguel",
      role: "Senior Product Manager | Fintech | Banking | Cash Management",
      text: "Robson é um profissional dedicado, comunicativo e sempre disposto a compartilhar seu conhecimento e colocá-lo em prática. Sempre em busca de descobrir o real problema do usuário para resolver de forma simples e fácil. Uma pessoa boa de grupo que está sempre com o time em todos os momentos, um grande profissional.",
      relationship: "Supervisionava Robson diretamente",
      bgColor: "bg-red-600",
    },
    {
      id: 6,
      name: "Tiago Miranda",
      role: "UX Designer | Design System Specialist | Product Designer",
      text: "Robinho certamente é um amigo que a vida de designer me deu. Tive a oportunidade de conhecer e contratar ele na Agência iSee. Ele sempre se reinventava com muita criatividade nos projetos em que atuava, com um humor que contagiava a todos da equipe, fazia um dia tenso ficar leve e divertido. Hoje em dia ele se tornou um grande UXer e está melhorando a vida de muitas pessoas. Sucesso na vida irmão!",
      relationship: "Supervisionava Robson diretamente",
      bgColor: "bg-indigo-600",
    },
    {
      id: 7,
      name: "José Carlos dos Santos (Zeca)",
      role: "Gerente de Projetos - Delivery Manager - Canais - SCRUM - AGIL",
      text: "O Robson é um entusiasta da perfeição em seus projetos de Design, sempre contribuindo com sugestões inovadoras e preocupado com os impactos que suas criações poderão causar no sentido de facilitar a experiência do usuário final.",
      relationship: "Supervisionava Robson diretamente",
      bgColor: "bg-teal-600",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 8000) // Muda a cada 8 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Depoimentos</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden rounded-xl bg-black p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                  <div
                    className={`w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ${testimonials[currentIndex].bgColor} flex items-center justify-center`}
                  >
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-gray-400 mt-1 mb-2">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-emerald-400 italic">{testimonials[currentIndex].relationship}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 text-lg md:text-xl text-center italic mb-6 relative">
                  <span className="text-4xl text-emerald-500 absolute -top-4 -left-2 opacity-50">"</span>
                  {testimonials[currentIndex].text}
                  <span className="text-4xl text-emerald-500 absolute -bottom-10 -right-2 opacity-50">"</span>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-emerald-500 w-6" : "bg-gray-600"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
