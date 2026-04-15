"use client"

import { motion } from "framer-motion"
import { Quote, User } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  relationship: string
  text: string
  bgColor: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Mathias",
    role: "DesignOps & Product Designer",
    relationship: "Trabalhou com Robson na mesma equipe",
    text: "Trabalhar com o Robson foi uma grata surpresa e um enorme prazer. Ele exerce uma liderança presente, empática e estrategicamente conectada tanto às pessoas quanto aos objetivos do negócio. Com olhar sensível para identificar talentos e potencializar as forças de cada integrante do time, cria um ambiente de confiança, segurança psicológica e colaboração genuína.",
    bgColor: "bg-emerald-500",
  },
  {
    id: 2,
    name: "Mike Oliveira",
    role: "Tech Lead Frontend",
    relationship: "Trabalhou com Robson na mesma equipe",
    text: "Um profissional ímpar com uma visão estratégica e comunicação muito eficientes. Nas demandas em que atuamos juntos foi evidente o entusiasmo e facilidade em engajar os profissionais ao redor, movimentando todos para alcançar o objetivo determinado.",
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    name: "Alfredo Miguel",
    role: "Senior Product Manager",
    relationship: "Trabalhou com Robson na mesma equipe",
    text: "Robson é um profissional dedicado, comunicativo e sempre disposto a compartilhar seu conhecimento e colocá-lo em prática. Sempre em busca de descobrir o real problema do usuário para resolver de forma simples e fácil. Uma pessoa boa de grupo que está sempre com o time em todos os momentos.",
    bgColor: "bg-cyan-500",
  },
  {
    id: 4,
    name: "Antonio Azevedo",
    role: "Founder, CEO @ LogiGo Connected Mobility",
    relationship: "Era sênior em relação a Robson",
    text: "Um cara de destaque, diferenciado! Com toda certeza trará diferenciação para o produto/serviço que desenvolver.",
    bgColor: "bg-purple-500",
  },
  {
    id: 5,
    name: "Altair Pereira Santos",
    role: "UX/UI Designer | Design System | Figma | Adobe Creative Suite",
    relationship: "Trabalhou com Robson na mesma equipe",
    text: "Trabalhamos juntos na produtora New Content (hoje Accenture) e posso dizer que Robson é um designer excepcional. Pontual, espírito de equipe e além da vontade de sempre querer aprender mais, Robson também gosta de compartilhar conhecimento.",
    bgColor: "bg-emerald-500",
  },
  {
    id: 6,
    name: "Tiago Miranda",
    role: "UX Designer | Design System Specialist | Product Designer",
    relationship: "Supervisionava Robson diretamente",
    text: "Robinho certamente é um amigo que a vida de designer me deu. Tive a oportunidade de conhecer e contratar ele na Agência iSee. Ele sempre se reinventava com muita criatividade nos projetos em que atuava, com um humor que contagiava a todos da equipe, fazia um dia tenso ficar leve e divertido. Hoje em dia ele se tornou um grande UXer e está melhorando a vida de muitas pessoas. Sucesso na vida irmão!",
    bgColor: "bg-indigo-500",
  },
  {
    id: 7,
    name: "José Carlos dos Santos (Zeca)",
    role: "Gerente de Projetos - Delivery Manager - Canais - SCRUM - AGIL",
    relationship: "Supervisionava Robson diretamente",
    text: "O Robson é um entusiasta da perfeição em seus projetos de Design, sempre contribuindo com sugestões inovadoras e preocupado com os impactos que suas criações poderão causar no sentido de facilitar a experiência do usuário final.",
    bgColor: "bg-teal-500",
  },
]

// Duplicate for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

export default function TestimonialsNew() {
  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-500 text-sm font-semibold tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            O que dizem sobre meu trabalho
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Carousel */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * testimonials.length + "%"],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] sm:w-[500px] relative p-8 bg-zinc-900/80 rounded-3xl border border-zinc-800"
            >
              {/* Quote marks */}
              <span className="absolute top-6 left-6 text-emerald-500 text-4xl font-serif">&ldquo;</span>
              <span className="absolute bottom-6 right-6 text-emerald-500 text-4xl font-serif">&rdquo;</span>

              {/* Author - Top */}
              <div className="flex flex-col items-center mb-6 pt-4">
                <div className={`w-16 h-16 rounded-full ${testimonial.bgColor} flex items-center justify-center mb-3`}>
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400 mt-1">{testimonial.role}</p>
                  <p className="text-xs text-emerald-500 mt-1">{testimonial.relationship}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-zinc-300 leading-relaxed text-center italic px-4">
                {testimonial.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-emerald-500 w-6' : 'bg-zinc-700'} transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  )
}
