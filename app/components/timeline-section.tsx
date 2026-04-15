"use client"

import { motion } from "framer-motion"
import { Building2, Briefcase, GraduationCap } from "lucide-react"

interface TimelineItem {
  period: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  current?: boolean
}

const timelineData: TimelineItem[] = [
  {
    period: "2023 - Atual",
    title: "UX Manager",
    company: "Grupo Boticário",
    description: "Liderança de time de design para produtos digitais, com foco em experiência do cliente e métricas de conversão.",
    icon: <Building2 className="h-5 w-5" />,
    current: true,
  },
  {
    period: "2021 - 2023",
    title: "Product Designer Lead",
    company: "Itaú Unibanco",
    description: "Liderança de designers em produtos financeiros, com destaque para o case de aumento de adoção de 2% para 26%.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    period: "2019 - 2021",
    title: "UX Designer Senior",
    company: "Banco BS2",
    description: "Design de experiências para produtos bancários digitais, contribuindo para a evolução da plataforma de banking.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    period: "2017 - 2019",
    title: "Product Designer",
    company: "Santander",
    description: "Atuação em projetos de transformação digital e melhoria de experiência em canais digitais.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    period: "2015 - 2017",
    title: "UI/UX Designer",
    company: "Agências e Freelance",
    description: "Transição de carreira com foco em UX e produto, incluindo projetos freelance e evolução técnica.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

export default function TimelineSection() {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-500 text-sm font-semibold tracking-wide uppercase">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Experiência profissional
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-zinc-800" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 sm:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    item.current 
                      ? "bg-emerald-500 border-emerald-500" 
                      : "bg-zinc-950 border-zinc-700"
                  }`}>
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`p-6 rounded-2xl border ${
                    item.current 
                      ? "bg-emerald-950/20 border-emerald-900/30" 
                      : "bg-zinc-900/50 border-zinc-800"
                  }`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.current 
                          ? "bg-emerald-500/20 text-emerald-400" 
                          : "bg-zinc-800 text-zinc-400"
                      }`}>
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-semibold rounded-full">
                          Atual
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-emerald-400 font-medium mb-3">{item.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
