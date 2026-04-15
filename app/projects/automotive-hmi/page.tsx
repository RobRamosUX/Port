"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Timer, Shield, Users, Gauge, Car, Mic, Monitor, Settings } from "lucide-react"
import Link from "next/link"

export default function AutomotiveHMICase() {
  const metrics = [
    { value: "-40%", label: "Distração motorista", icon: <Shield className="h-5 w-5" /> },
    { value: "+85%", label: "Satisfação usuário", icon: <Users className="h-5 w-5" /> },
    { value: "+60%", label: "Tempo de resposta", icon: <Timer className="h-5 w-5" /> },
    { value: "Ford", label: "Cliente global", icon: <Car className="h-5 w-5" /> },
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
            <span className="inline-block px-4 py-2 bg-zinc-700/50 text-zinc-300 text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              HMI Automotivo:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">
                Interface Veicular
              </span>{" "}
              de Nova Geração
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Desenvolvimento de uma Interface Homem-Máquina (HMI) de próxima geração para a Ford, 
              focando em criar uma experiência mais segura e envolvente para motoristas e passageiros.
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
                <div className="inline-flex items-center justify-center p-3 bg-zinc-700/30 rounded-xl text-zinc-300 mb-3">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dpovSOfA6PZ4kxHYT5qrDfYYVyuo6U.png"
              alt="Interface HMI Automotiva"
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  A Ford é uma das maiores montadoras do mundo, com presença global e milhões de 
                  veículos produzidos anualmente. A evolução das interfaces veiculares é crucial 
                  para a competitividade no mercado automotivo moderno.
                </p>
                <p>
                  O desafio era criar uma HMI (Human-Machine Interface) de próxima geração que 
                  fosse intuitiva, segura e que proporcionasse uma experiência diferenciada para 
                  motoristas e passageiros.
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">2</span>
                O Desafio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  As interfaces veiculares tradicionais eram complexas e potencialmente perigosas, 
                  exigindo atenção excessiva do motorista. Precisávamos reimaginar a experiência 
                  priorizando segurança sem sacrificar funcionalidade.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como criar uma interface veicular que seja ao mesmo tempo funcional, 
                    bonita e acima de tudo segura para uso durante a condução?&rdquo;
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Como <strong className="text-white">Designer Senior</strong> no projeto da Ford, 
                  liderei o design e desenvolvimento do sistema HMI automotivo, focando em usabilidade 
                  e segurança do motorista.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Design de interface otimizado para segurança do motorista</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Integração com sistemas veiculares e recursos inteligentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Implementação de controle por voz e gestos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Criação de perfis de usuário personalizáveis</span>
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvemos uma estratégia focada em três pilares principais:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Safety First</h4>
                      <p className="text-sm">Toda interação projetada para minimizar distração e tempo de olhos fora da estrada.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Interação Multimodal</h4>
                      <p className="text-sm">Voz, toque e gestos trabalhando em conjunto para máxima flexibilidade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Personalização Inteligente</h4>
                      <p className="text-sm">Perfis de usuário que aprendem e se adaptam às preferências individuais.</p>
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">5</span>
                Soluções Implementadas
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-700/30 rounded-xl flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Cluster Digital</h4>
                      <p className="text-sm text-zinc-400">Painel de instrumentos totalmente digital com informações contextuais</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-700/30 rounded-xl flex items-center justify-center">
                      <Mic className="h-6 w-6 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Controle por Voz</h4>
                      <p className="text-sm text-zinc-400">Comandos de voz natural para controlar funções sem tirar as mãos do volante</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-700/30 rounded-xl flex items-center justify-center">
                      <Gauge className="h-6 w-6 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Informações em Tempo Real</h4>
                      <p className="text-sm text-zinc-400">Dados do veículo exibidos de forma clara e não intrusiva</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-700/30 rounded-xl flex items-center justify-center">
                      <Settings className="h-6 w-6 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Perfis Personalizados</h4>
                      <p className="text-sm text-zinc-400">Configurações individuais que se adaptam a cada motorista</p>
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">6</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-zinc-700/30 to-zinc-900/50 rounded-2xl border border-zinc-700/50">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-zinc-300">-40%</p>
                      <p className="text-zinc-400 mt-2">Distração do motorista</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-zinc-300">+85%</p>
                      <p className="text-zinc-400 mt-2">Satisfação do usuário</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-zinc-700/50">
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Melhoria de 60% no tempo de resposta do sistema</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Recursos de conectividade veicular aprimorados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Feedback positivo de especialistas e usuários</span>
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
                <span className="w-8 h-8 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm font-bold">7</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O projeto de HMI para a Ford trouxe insights valiosos sobre design automotivo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Segurança deve ser o princípio fundamental de qualquer decisão de design automotivo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Interação multimodal oferece flexibilidade e reduz carga cognitiva.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Testes em contexto real são essenciais para validar interfaces de alta criticidade.</span>
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
                href="https://robsonramosux.medium.com/ux-ui-no-setor-automotivo-55231a54c55b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-600 transition-colors"
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
