"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp, Shield, ShoppingBag, CreditCard } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  metric: string
  metricLabel: string
  icon: React.ReactNode
  image: string
  tags: string[]
  href: string
}

const projects: Project[] = [
  {
    id: "digital-banking",
    title: "Digital Banking Growth",
    description: "Aumento de adoção de 2% para 26% através de redesign estratégico da jornada",
    metric: "+1200%",
    metricLabel: "Aumento na adoção",
    icon: <TrendingUp className="h-5 w-5" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740595955181-SfP7w4V7Ze2vLjUZ0SvIgxIVDwQygf.jpeg",
    tags: ["Fintech", "Growth", "Strategy"],
    href: "/case/digital-banking",
  },
  {
    id: "automotive-hmi",
    title: "Automotive HMI",
    description: "Redesign da experiência embarcada focado em usabilidade e segurança",
    metric: "40%",
    metricLabel: "Redução em tempo de tarefa",
    icon: <Shield className="h-5 w-5" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_KAHvf_ZTfRK48Rdm-g1SdEerX3K0oL1IJDJ3mQlEA0behZJ.webp",
    tags: ["Automotive", "HMI", "Safety"],
    href: "/case/automotive-hmi",
  },
  {
    id: "retail-experience",
    title: "O Grupo Boticário",
    description: "Reinventando a experiência de varejo através de inovação digital e jornada omnichannel",
    metric: "+35%",
    metricLabel: "Aumento em engajamento",
    icon: <ShoppingBag className="h-5 w-5" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4uhos97b93RHpk198pzvUw-xW0KYZADFUTX1IGQLocVgwkbWNnbaF.webp",
    tags: ["Retail", "Omnichannel", "UX"],
    href: "/projects/retail-experience",
  },
  {
    id: "credito-consignado-itau",
    title: "Crédito Consignado Itaú",
    description: "Simplificação e digitalização do processo de crédito consignado para melhorar a experiência do usuário",
    metric: "+45%",
    metricLabel: "Aumento em conversão",
    icon: <CreditCard className="h-5 w-5" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%2011.55.42-su41Uu4KsvIaRyNzhhn5Sq07YX9484.png",
    tags: ["Fintech", "Banking", "UX"],
    href: "/projects/credito-consignado-itau",
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-500 text-sm font-semibold tracking-wide uppercase">
            Projetos em Destaque
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Impacto real em produtos digitais
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.href}>
                <div className="group relative bg-zinc-900/50 rounded-3xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 sm:p-12 flex flex-col justify-between order-2 md:order-1">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-zinc-800/50 text-zinc-400 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>
                      </div>

                      {/* Metric */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                            {project.icon}
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-emerald-400">{project.metric}</p>
                            <p className="text-sm text-zinc-500">{project.metricLabel}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Ver case</span>
                          <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 md:h-auto min-h-[300px] order-1 md:order-2">
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-zinc-900/80 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
