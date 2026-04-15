"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Shield, Clock, Eye, Zap } from "lucide-react"
import Link from "next/link"

export default function AutomotiveHMICase() {
  const metrics = [
    { value: "40%", label: "Redução em tempo de tarefa", icon: <Clock className="h-5 w-5" /> },
    { value: "60%", label: "Menos erros de interação", icon: <Shield className="h-5 w-5" /> },
    { value: "95%", label: "Satisfação do usuário", icon: <Eye className="h-5 w-5" /> },
    { value: "2s", label: "Tempo médio de glance", icon: <Zap className="h-5 w-5" /> },
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
            <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Redesign de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                experiência embarcada
              </span>{" "}
              focado em usabilidade e segurança
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Como projetamos uma interface automotiva que reduz a distração do motorista 
              enquanto oferece acesso rápido às funcionalidades essenciais.
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
                <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-500 mb-3">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_KAHvf_ZTfRK48Rdm-g1SdEerX3K0oL1IJDJ3mQlEA0behZJ.webp"
              alt="Automotive HMI Interface"
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O projeto envolveu o redesign completo da interface do sistema de infoentretenimento 
                  de uma montadora de veículos. O desafio principal era criar uma experiência que 
                  fosse intuitiva, segura e moderna, atendendo às necessidades de diferentes perfis de motoristas.
                </p>
                <p>
                  O sistema anterior apresentava problemas de usabilidade que resultavam em 
                  distração do motorista e dificuldade de acesso às funcionalidades mais utilizadas.
                </p>
              </div>
            </motion.div>

            {/* Problema */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">2</span>
                Problema de Negócio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  Pesquisas de satisfação indicavam que a experiência do sistema de infoentretenimento 
                  era um dos principais pontos de insatisfação dos clientes, impactando a percepção 
                  geral da marca e a intenção de recompra.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como criar uma interface que seja segura, intuitiva e que eleve a 
                    percepção de valor do veículo?&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Descoberta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">3</span>
                Descoberta
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Através de testes em simulador, entrevistas contextuais e análise de benchmarks 
                  do setor, identificamos os principais problemas:
                </p>
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Hierarquia confusa</h4>
                    <p className="text-sm">Funções essenciais estavam escondidas em menus profundos.</p>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Elementos pequenos demais</h4>
                    <p className="text-sm">Botões e textos não eram adequados para interação durante a condução.</p>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Feedback visual insuficiente</h4>
                    <p className="text-sm">Usuários não tinham certeza se suas ações foram registradas.</p>
                  </div>
                </div>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Definimos princípios de design específicos para o contexto automotivo:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Glanceability</h4>
                      <p className="text-sm">Informações legíveis em menos de 2 segundos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Touch-first</h4>
                      <p className="text-sm">Alvos de toque generosos e espaçamento adequado.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Contextual awareness</h4>
                      <p className="text-sm">Interface que se adapta ao contexto de uso.</p>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">5</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 rounded-2xl border border-emerald-900/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-emerald-400">40%</p>
                      <p className="text-zinc-400 mt-2">Redução no tempo de tarefa</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-emerald-400">60%</p>
                      <p className="text-zinc-400 mt-2">Menos erros de interação</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-emerald-900/30">
                    <p className="text-zinc-300">
                      O novo design foi aprovado para implementação em toda a linha de veículos 
                      da próxima geração, estabelecendo um novo padrão de UX para a marca.
                    </p>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">6</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Contexto de uso define completamente as decisões de design.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Testes em condições reais (ou simuladas) são essenciais para validação.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Segurança e usabilidade não são trade-offs — são complementares.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Quer saber mais sobre este projeto?
            </h2>
            <p className="text-zinc-400 mb-8">
              Ficarei feliz em compartilhar mais detalhes sobre o processo e os aprendizados.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Robson Ramos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
