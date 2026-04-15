"use client"

import { motion } from "framer-motion"
import { Users, Target, TrendingUp, MessageSquare, Compass, Handshake } from "lucide-react"

const leadershipAreas = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestão de Designers",
    description: "Construção e desenvolvimento de times de design de alta performance, com foco em autonomia e entrega de valor.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "1:1s e Feedback",
    description: "Rituais consistentes de acompanhamento individual, promovendo crescimento contínuo e alinhamento de expectativas.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Desenvolvimento de Carreira",
    description: "Mentoria ativa para evolução técnica e de soft skills, preparando designers para novos desafios.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Definição de Processos",
    description: "Implementação de metodologias e rituais que aumentam eficiência e qualidade das entregas do time.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Alinhamento Produto & Eng",
    description: "Ponte constante entre design, produto e engenharia, garantindo visão compartilhada e execução eficiente.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Resultados Mensuráveis",
    description: "Orientação do time para métricas de negócio, conectando entregas de design com impacto real.",
  },
]

const impacts = [
  "Melhoria na qualidade e consistência das entregas",
  "Aumento de autonomia e ownership do time",
  "Maior maturidade em processos de design",
  "Times mais engajados e produtivos",
]

export default function LeadershipSection() {
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
            Liderança
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Construindo times de alta performance
          </h2>
          <p className="text-lg text-zinc-400 mt-4 max-w-2xl">
            Acredito que o papel do líder é criar condições para que o time entregue seu melhor trabalho, 
            com autonomia, clareza e propósito.
          </p>
        </motion.div>

        {/* Leadership Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {leadershipAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 w-fit mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 rounded-3xl border border-emerald-900/30 p-8 sm:p-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Impacto na prática</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                <span className="text-zinc-300">{impact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
