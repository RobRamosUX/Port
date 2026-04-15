"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function HeroNew() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm text-zinc-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Disponível para novos desafios
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Product Designer focado em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              crescimento
            </span>{" "}
            e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              impacto de negócio
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            Lidero e escalo experiências digitais orientadas a métricas, combinando estratégia, UX e visão de produto.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300"
            >
              Ver projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center px-8 py-4 bg-zinc-800/50 text-white font-semibold rounded-2xl border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em contato
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-zinc-800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">8+</p>
                <p className="text-sm text-zinc-500 mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">26%</p>
                <p className="text-sm text-zinc-500 mt-1">Aumento em adoção</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">40+</p>
                <p className="text-sm text-zinc-500 mt-1">Mentorados</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">4</p>
                <p className="text-sm text-zinc-500 mt-1">Grandes empresas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
