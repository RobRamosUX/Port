"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Clock, Users, CheckCircle, CreditCard, MessageSquare, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function CreditoConsignadoItauCase() {
  const metrics = [
    { value: "+45%", label: "Aumento em conversão", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "-40%", label: "Tempo de solicitação", icon: <Clock className="h-5 w-5" /> },
    { value: "+60%", label: "Satisfação cliente", icon: <Users className="h-5 w-5" /> },
    { value: "+50%", label: "Taxa de conclusão", icon: <CheckCircle className="h-5 w-5" /> },
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
            <span className="inline-block px-4 py-2 bg-[#EC7000]/10 text-[#EC7000] text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crédito Consignado Itaú:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC7000] to-amber-400">
                Simplificando
              </span>{" "}
              Empréstimos Pessoais
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Revolução na experiência de solicitação e gestão de empréstimos consignados, tornando o processo 
              mais acessível, transparente e centrado no usuário.
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
                <div className="inline-flex items-center justify-center p-3 bg-[#EC7000]/10 rounded-xl text-[#EC7000] mb-3">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%2011.55.42-su41Uu4KsvIaRyNzhhn5Sq07YX9484.png"
              alt="Interface do Crédito Consignado Itaú"
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O Itaú Unibanco é um dos maiores bancos da América Latina, atendendo milhões de clientes 
                  com produtos financeiros diversos. O crédito consignado é um produto estratégico que 
                  demanda uma experiência digital excepcional.
                </p>
                <p>
                  O desafio era criar uma plataforma digital intuitiva que simplificasse o processo de 
                  empréstimo, fornecendo informações claras para que os clientes tomassem decisões 
                  financeiras informadas com facilidade e confiança.
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">2</span>
                O Desafio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  O processo tradicional de crédito consignado era complexo e burocrático, gerando 
                  fricção e abandono. Precisávamos reimaginar toda a jornada para torná-la mais 
                  acessível e transparente.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como transformar um processo burocrático de empréstimo em uma experiência 
                    digital simples, transparente e que inspire confiança?&rdquo;
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Como <strong className="text-white">Design Lead</strong> no Itaú, liderei a equipe 
                  de UX responsável pelo redesign completo da experiência de crédito consignado, 
                  focando em simplicidade e transparência.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Redesenho completo do fluxo de solicitação de empréstimo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Criação de simulador interativo e intuitivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Dashboard personalizado para acompanhamento de empréstimos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Integração de chatbot para suporte instantâneo</span>
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvemos uma estratégia focada em três pilares principais:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#EC7000] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Simplicidade Radical</h4>
                      <p className="text-sm">Redução de etapas e simplificação de formulários para minimizar fricção.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#EC7000] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Transparência Total</h4>
                      <p className="text-sm">Informações claras sobre taxas, parcelas e condições em todos os momentos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#EC7000] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Suporte Inteligente</h4>
                      <p className="text-sm">Chatbot e notificações proativas para acompanhar o cliente em cada etapa.</p>
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">5</span>
                Soluções Implementadas
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EC7000]/10 rounded-xl flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-[#EC7000]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Simulador Interativo</h4>
                      <p className="text-sm text-zinc-400">Ferramenta intuitiva para simular empréstimos com valores e parcelas em tempo real</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EC7000]/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#EC7000]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Dashboard Personalizado</h4>
                      <p className="text-sm text-zinc-400">Painel para acompanhamento de empréstimos, pagamentos e histórico</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EC7000]/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-[#EC7000]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Chatbot Inteligente</h4>
                      <p className="text-sm text-zinc-400">Suporte instantâneo para dúvidas e esclarecimentos 24/7</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EC7000]/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-[#EC7000]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Notificações Inteligentes</h4>
                      <p className="text-sm text-zinc-400">Alertas proativos sobre vencimentos, aprovações e oportunidades</p>
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">6</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-[#EC7000]/20 to-zinc-900/50 rounded-2xl border border-[#EC7000]/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-[#EC7000]">+45%</p>
                      <p className="text-zinc-400 mt-2">Aumento em conversão</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-[#EC7000]">-40%</p>
                      <p className="text-zinc-400 mt-2">Tempo de solicitação</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#EC7000]/30">
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                        <span>Aumento de 60% na satisfação do cliente com o processo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                        <span>Redução de 30% nas chamadas para suporte</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                        <span>Melhoria de 50% na taxa de conclusão de solicitações</span>
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
                <span className="w-8 h-8 bg-[#EC7000]/20 rounded-lg flex items-center justify-center text-[#EC7000] text-sm font-bold">7</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O projeto de Crédito Consignado do Itaú trouxe insights valiosos sobre design financeiro:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Transparência gera confiança e aumenta conversão em produtos financeiros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Simuladores interativos reduzem a ansiedade e facilitam a tomada de decisão.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#EC7000] rounded-full mt-2 flex-shrink-0" />
                    <span>Suporte proativo previne problemas e melhora a experiência pós-venda.</span>
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
                href="https://emprestimo.itau.com.br/emprestimo-consignado/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC7000] text-white font-semibold rounded-xl hover:bg-[#EC7000]/90 transition-colors"
              >
                Conheça o produto no site do Itaú
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
