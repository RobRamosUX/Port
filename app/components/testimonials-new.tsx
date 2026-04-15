"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  text: string
  highlight: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Mathias",
    role: "DesignOps & Product Designer",
    company: "Grupo Boticário",
    text: "Trabalhar com o Robson foi uma grata surpresa e um enorme prazer. Ele exerce uma liderança presente, empática e estrategicamente conectada tanto às pessoas quanto aos objetivos do negócio. Com olhar sensível para identificar talentos e potencializar as forças de cada integrante do time, cria um ambiente de confiança, segurança psicológica e colaboração genuína.",
    highlight: "Liderança presente e empática",
  },
  {
    id: 2,
    name: "Mike Oliveira",
    role: "Tech Lead Frontend",
    company: "Itaú Unibanco",
    text: "Um profissional ímpar com uma visão estratégica e comunicação muito eficientes. Nas demandas em que atuamos juntos foi evidente o entusiasmo e facilidade em engajar os profissionais ao redor, movimentando todos para alcançar o objetivo determinado.",
    highlight: "Visão estratégica e comunicação eficiente",
  },
  {
    id: 3,
    name: "Alfredo Miguel",
    role: "Senior Product Manager",
    company: "Banco BS2",
    text: "Robson é um profissional dedicado, comunicativo e sempre disposto a compartilhar seu conhecimento e colocá-lo em prática. Sempre em busca de descobrir o real problema do usuário para resolver de forma simples e fácil. Uma pessoa boa de grupo que está sempre com o time em todos os momentos.",
    highlight: "Foco no problema real do usuário",
  },
]

export default function TestimonialsNew() {
  return (
    <section className="bg-black py-24 sm:py-32">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Quote className="h-5 w-5" />
              </div>

              {/* Highlight Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Text */}
              <p className="text-zinc-300 leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                    <p className="text-xs text-emerald-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
