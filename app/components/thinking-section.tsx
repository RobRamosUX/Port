"use client"

import { motion } from "framer-motion"
import { Target, TrendingDown, Lightbulb } from "lucide-react"

export default function ThinkingSection() {
  const points = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      text: "onde o negócio perde dinheiro",
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "onde o usuário trava",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      text: "onde existem oportunidades de crescimento",
    },
  ]

  return (
    <section className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500 text-sm font-semibold tracking-wide uppercase">
              Filosofia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-12">
              Como eu penso produto
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-2xl sm:text-3xl text-zinc-300 font-light leading-relaxed">
              Eu não começo pelo layout.
            </p>

            <div className="pl-0 sm:pl-8 space-y-6">
              <p className="text-xl text-zinc-400">Começo entendendo:</p>
              
              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800"
                  >
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                      {point.icon}
                    </div>
                    <span className="text-lg text-zinc-300">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-xl sm:text-2xl text-zinc-300">
                Design, pra mim, é meio.
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
                Impacto é o objetivo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
