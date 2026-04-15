"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Smartphone, Users, Shield, Building2, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DigitalBankingCase() {
  const metrics = [
    { value: "+150%", label: "Adoção mobile", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "-40%", label: "Chamadas suporte", icon: <Smartphone className="h-5 w-5" /> },
    { value: "+60%", label: "Satisfação cliente", icon: <Users className="h-5 w-5" /> },
    { value: "0", label: "Violações segurança", icon: <Shield className="h-5 w-5" /> },
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
            <span className="inline-block px-4 py-2 bg-[#1a1a6e]/30 text-blue-400 text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Banco BS2:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Revolucionando
              </span>{" "}
              o Banking Digital PJ
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Transformação da experiência de banking digital para uma das principais instituições 
              financeiras de pessoas jurídicas do Brasil, criando uma plataforma inovadora e centrada no usuário.
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
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-3">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740595955181-SfP7w4V7Ze2vLjUZ0SvIgxIVDwQygf.jpeg"
              alt="Interface de Banking Digital BS2"
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O Banco BS2 é uma instituição financeira focada em pessoas jurídicas, oferecendo 
                  soluções completas de banking para empresas de pequeno, médio e grande porte. 
                  A transformação digital era essencial para manter competitividade no mercado.
                </p>
                <p>
                  O desafio era criar uma plataforma de banking digital que estabelecesse novos 
                  padrões no setor, trazendo uma experiência Banking completa e intuitiva para 
                  os usuários corporativos.
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">2</span>
                O Desafio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  O banking tradicional para PJ era complexo e pouco intuitivo. Precisávamos 
                  reimaginar toda a experiência para torná-la mais acessível sem perder a 
                  robustez necessária para operações empresariais.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como criar uma experiência de banking digital PJ que seja ao mesmo 
                    tempo poderosa para operações complexas e simples de usar no dia a dia?&rdquo;
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Como <strong className="text-white">Design Manager</strong> do time BS2, liderei 
                  o redesign completo da plataforma de banking digital, coordenando um time de 8 
                  profissionais e alinhando esforços entre produto, engenharia e negócios.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Liderança de time de 8 profissionais de design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Redesign completo do aplicativo móvel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Implementação de autenticação biométrica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Integração de chatbot com IA para suporte</span>
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvemos uma estratégia focada em três pilares principais:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Mobile First</h4>
                      <p className="text-sm">Aplicativo intuitivo e amigável para tarefas bancárias cotidianas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Segurança Avançada</h4>
                      <p className="text-sm">Autenticação biométrica e recursos de segurança de última geração.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Inteligência de Dados</h4>
                      <p className="text-sm">Insights financeiros personalizados e recomendações baseadas em IA.</p>
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">5</span>
                Soluções Implementadas
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">App Mobile Redesenhado</h4>
                      <p className="text-sm text-zinc-400">Interface intuitiva para operações bancárias cotidianas</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Autenticação Biométrica</h4>
                      <p className="text-sm text-zinc-400">Segurança avançada com reconhecimento facial e digital</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Insights Financeiros</h4>
                      <p className="text-sm text-zinc-400">Dashboard com recomendações personalizadas baseadas em IA</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Integração Omnichannel</h4>
                      <p className="text-sm text-zinc-400">Conexão perfeita entre serviços online e offline</p>
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">6</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-blue-500/20 to-zinc-900/50 rounded-2xl border border-blue-500/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-blue-400">+150%</p>
                      <p className="text-zinc-400 mt-2">Adoção banking móvel</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-blue-400">0</p>
                      <p className="text-zinc-400 mt-2">Violações de segurança</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-blue-500/30">
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Redução de 40% nas chamadas de suporte ao cliente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Melhoria de 60% nos índices de satisfação do cliente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Aumento significativo no volume de transações digitais</span>
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
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold">7</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O projeto no Banco BS2 trouxe insights valiosos sobre banking digital corporativo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Usuários corporativos valorizam eficiência tanto quanto simplicidade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Segurança deve ser robusta mas invisível para o usuário.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>IA pode agregar valor real quando focada em insights acionáveis.</span>
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
                href="https://www.linkedin.com/posts/robson-c-ramos_que-felicidade-minha-terceira-passagem-activity-7300588586641326080-YcW1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-500/90 transition-colors"
              >
                Veja mais no LinkedIn
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
