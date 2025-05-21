"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      title: "Minha Trajetória",
      description: "Conheça minha jornada profissional e as experiências que moldaram minha carreira em UX e design.",
      icon: "🚀",
      link: "/highlights/trajetoria",
      color: "from-blue-600 to-indigo-800",
    },
    {
      title: "Meus Principais Projetos",
      description: "Uma seleção dos projetos mais impactantes e inovadores que tive o privilégio de liderar.",
      icon: "💼",
      link: "/highlights/projetos",
      color: "from-amber-500 to-orange-700",
    },
    {
      title: "Times dos Quais Geri",
      description:
        "Conheça as equipes multidisciplinares que tive a honra de liderar e os resultados que alcançamos juntos.",
      icon: "👥",
      link: "/highlights/times",
      color: "from-emerald-500 to-green-700",
    },
  ]

  return (
    <section className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Destaques
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Link href={highlight.link} key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-black p-8 shadow-lg cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="mb-4 text-4xl">{highlight.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-white">{highlight.title}</h3>
                  <p className="mb-6 text-gray-400">{highlight.description}</p>
                  <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
