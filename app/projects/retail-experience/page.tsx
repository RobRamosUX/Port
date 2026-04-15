"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Store, Users, Sparkles, ShoppingBag, Palette } from "lucide-react"
import Link from "next/link"

export default function RetailExperienceCase() {
  const metrics = [
    { value: "+35%", label: "Engajamento franqueados", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "7", label: "Designers liderados", icon: <Users className="h-5 w-5" /> },
    { value: "Omni", label: "Integração de canais", icon: <Store className="h-5 w-5" /> },
    { value: "+40%", label: "Satisfação cliente", icon: <Sparkles className="h-5 w-5" /> },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-[#00A651]/10 text-[#00A651] text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              O Grupo Boticário:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-emerald-400">
                Reinventando a Experiência
              </span>{" "}
              de Varejo
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Transformação da experiência de varejo através da integração estratégica entre digital e físico, 
              elevando a jornada do consumidor e franqueado a um novo patamar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center p-3 bg-[#00A651]/10 rounded-xl text-[#00A651] mb-3">
                  {metric.icon}
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-zinc-500 mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-zinc-800"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4uhos97b93RHpk198pzvUw-xW0KYZADFUTX1IGQLocVgwkbWNnbaF.webp"
              alt="Design de Loja O Boticário"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Contexto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O Grupo Boticário é uma das maiores empresas de beleza do mundo, com um portfólio de marcas 
                  icônicas e uma rede de milhares de franquias em todo o Brasil. A transformação digital do 
                  varejo exigia uma nova abordagem para conectar experiências online e offline.
                </p>
                <p>
                  O desafio era criar uma experiência omnichannel inovadora que elevasse a jornada de compra 
                  e abastecimento, fortalecendo a conexão entre marca, franqueado e consumidor final.
                </p>
              </div>
            </motion.div>

            {/* O Desafio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">2</span>
                O Desafio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  O varejo de beleza estava passando por uma transformação acelerada. Precisávamos 
                  integrar múltiplos canais e criar uma experiência fluida que atendesse às novas 
                  expectativas dos consumidores e franqueados.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como criar uma experiência de varejo que integre perfeitamente o digital 
                    e o físico, elevando a satisfação de franqueados e consumidores?&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Minha Atuação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Como <strong className="text-white">Design Lead</strong> no Grupo Boticário, liderei 
                  um time de 7 designers na transformação da experiência de varejo, coordenando 
                  iniciativas de inovação digital e integração omnichannel.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Liderança de time de 7 designers em projetos de inovação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Redesign da plataforma de abastecimento para franquias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Implementação de displays digitais interativos nas lojas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Criação de experiências de realidade aumentada para engajamento</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Estratégia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvemos uma estratégia focada em três pilares principais:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#00A651] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Integração Omnichannel</h4>
                      <p className="text-sm">Conexão fluida entre canais online e offline, permitindo uma jornada de compra unificada.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#00A651] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Plataforma de Abastecimento</h4>
                      <p className="text-sm">Reformulação completa do sistema de pedidos para franquias com inteligência de dados.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#00A651] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Experiências Imersivas</h4>
                      <p className="text-sm">Displays interativos e realidade aumentada para engajar clientes nas lojas físicas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soluções Implementadas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">5</span>
                Soluções Implementadas
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                      <Store className="h-6 w-6 text-[#00A651]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Displays Digitais Interativos</h4>
                      <p className="text-sm text-zinc-400">Telas nas lojas para mostrar produtos e fornecer informações personalizadas</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-[#00A651]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Nova Plataforma de Abastecimento</h4>
                      <p className="text-sm text-zinc-400">Sistema reformulado com inteligência de estoque e ciclos de compra</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-[#00A651]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Experiências de Realidade Aumentada</h4>
                      <p className="text-sm text-zinc-400">Provadores virtuais e experiências imersivas para engajamento</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                      <Palette className="h-6 w-6 text-[#00A651]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Recomendações Personalizadas</h4>
                      <p className="text-sm text-zinc-400">Sistema de sugestões baseado em preferências e histórico do cliente</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">6</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-[#00A651]/20 to-zinc-900/50 rounded-2xl border border-[#00A651]/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-[#00A651]">+35%</p>
                      <p className="text-zinc-400 mt-2">Engajamento franqueados</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-[#00A651]">+40%</p>
                      <p className="text-zinc-400 mt-2">Satisfação do cliente</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#00A651]/30">
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                        <span>Integração perfeita de experiências digitais e físicas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                        <span>Aumento nas vendas através da integração omnichannel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                        <span>Percepção da marca aprimorada como varejista inovador</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aprendizados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00A651]/20 rounded-lg flex items-center justify-center text-[#00A651] text-sm font-bold">7</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O projeto no Grupo Boticário trouxe insights valiosos sobre transformação digital no varejo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>A integração omnichannel precisa ser pensada desde a estratégia, não apenas na execução.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Franqueados engajados são multiplicadores naturais de uma boa experiência.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mt-2 flex-shrink-0" />
                    <span>Tecnologia no varejo deve ser invisível, servindo para facilitar, não complicar.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-8 border-t border-zinc-800"
            >
              <a
                href="https://robsonramosux.medium.com/o-grupo-botic%C3%A1rio-7ecb36f2033a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A651] text-white font-semibold rounded-xl hover:bg-[#00A651]/90 transition-colors"
              >
                Veja o artigo completo no Medium
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </main>
  )
}
