"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Mail, X, Copy, Check, ExternalLink } from "lucide-react"

export default function HeroNew() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = "robsonramosux@gmail.com"

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          {/* Avatar and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eu2025.jpg-rcBQzLYgS3n9N0i9AKv2rkF2lAMQdA.jpeg" 
                  alt="Robson Ramos"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-black flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </span>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white">Robson Ramos</h2>
              <span className="inline-flex items-center text-sm text-zinc-400">
                Disponível para novos desafios
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Design Manager focado em{" "}
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
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center px-8 py-4 bg-zinc-800/50 text-white font-semibold rounded-2xl border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em contato
            </button>
          </motion.div>

          {/* Companies Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-zinc-800"
          >
            <p className="text-sm text-zinc-500 mb-10 text-center">Empresas onde atuei</p>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-800 via-emerald-500/50 to-zinc-800 origin-left hidden md:block"
              />
              
              {/* Companies */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                {/* Santander - 2019 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-zinc-900 z-10 hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/santander-xTt7RJqbDJy9zVZATLdqeJo9EegomB.png" 
                      alt="Santander"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-400">Designer Senior</span>
                    <p className="text-xs text-zinc-500 mt-1">Santander</p>
                  </div>
                </motion.div>
                
                {/* Itaú - 2021 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-zinc-900 z-10 hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itaunew-pNgfIUbX2WCfKqOuEc3bxMpdObDeNP.png" 
                      alt="Itaú"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-400">Design Lead</span>
                    <p className="text-xs text-zinc-500 mt-1">Itaú</p>
                  </div>
                </motion.div>
                
                {/* Grupo Boticário - 2022 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-zinc-900 z-10 hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boti-yAejTKkjDBCXL1pncttrWvJOhQqbo9.png" 
                      alt="Grupo Boticário"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-400">Design Lead</span>
                    <p className="text-xs text-zinc-500 mt-1">Boticário</p>
                  </div>
                </motion.div>
                
                {/* Banco BS2 - 2024 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1a1a6e] flex items-center justify-center border-4 border-zinc-900 z-10 hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">bs2</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-400">Design Manager</span>
                    <p className="text-xs text-zinc-500 mt-1">Banco BS2</p>
                  </div>
                </motion.div>
                
                {/* PicPay - 2025 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-zinc-900 z-10 hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mTHFrLZwwPHUxrqHuOIdZtgqGJl7nW.png" 
                      alt="PicPay"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-400">Design Manager</span>
                    <p className="text-xs text-zinc-500 mt-1">PicPay</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-12 border-t border-zinc-800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">8+</p>
                <p className="text-sm text-zinc-500 mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">5+</p>
                <p className="text-sm text-zinc-500 mt-1">Times liderados</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">40+</p>
                <p className="text-sm text-zinc-500 mt-1">Mentorados</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">5</p>
                <p className="text-sm text-zinc-500 mt-1">Grandes empresas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-emerald-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Vamos conversar!</h3>
                  <p className="text-zinc-400 mb-6">
                    Estou esperando o seu contato para criarmos produtos digitais incríveis.
                  </p>

                  {/* Email display */}
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 mb-6">
                    <p className="text-emerald-400 font-mono text-lg">{email}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={copyEmail}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        copied
                          ? "bg-emerald-500 text-white"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-5 w-5" />
                          Email copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-5 w-5" />
                          Copiar email
                        </>
                      )}
                    </button>
                    
                    <a
                      href={`mailto:${email}`}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-zinc-800 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Abrir no cliente de email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
