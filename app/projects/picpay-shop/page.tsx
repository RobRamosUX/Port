"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, ShoppingCart, Smartphone, Zap, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function PicPayShopCase() {
  const metrics = [
    { value: "3x", label: "GMV Black Friday", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "+104%", label: "Aumento transações", icon: <ShoppingCart className="h-5 w-5" /> },
    { value: "+68%", label: "Acessos ao Shop", icon: <Users className="h-5 w-5" /> },
    { value: "4x", label: "Vendas smartphones", icon: <Smartphone className="h-5 w-5" /> },
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
            <span className="inline-block px-4 py-2 bg-[#21C25E]/10 text-[#21C25E] text-sm font-medium rounded-full mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              PicPay Shop:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21C25E] to-emerald-400">
                Black Friday 2025
              </span>{" "}
              com recorde histórico
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              O melhor desempenho do hub de consumo desde o lançamento do PicPay Shop. 
              O marketplace integrado triplicou o GMV e consolidou o PicPay como ecossistema completo de consumo.
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
                <div className="inline-flex items-center justify-center p-3 bg-[#21C25E]/10 rounded-xl text-[#21C25E] mb-3">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela_15-4-2026_15223_blog.picpay.com-7NwRMRB9fzYU9CGjwcSJfOqvlrBjXW.jpeg"
              alt="PicPay Shop Black Friday 2025"
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">1</span>
                Contexto
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O PicPay Shop é o marketplace integrado do PicPay que reúne produtos, viagens, 
                  experiências e gift cards em uma única plataforma. A Black Friday 2025 representou 
                  uma oportunidade estratégica para consolidar o hub de consumo como diferencial competitivo.
                </p>
                <p>
                  O desafio era criar uma experiência que maximizasse conversões durante o período 
                  de alta demanda, mantendo a fluidez e performance que os usuários esperam do PicPay.
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">2</span>
                O Desafio
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  A Black Friday é o momento mais crítico do ano para e-commerce. Precisávamos 
                  garantir que a experiência do PicPay Shop estivesse otimizada para:
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como transformar o PicPay Shop em um destino de compras durante a Black Friday, 
                    competindo com gigantes do e-commerce?&rdquo;
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Como <strong className="text-white">Design Manager</strong> do PicPay, liderei 
                  a estratégia de experiência do usuário para a Black Friday 2025, coordenando 
                  esforços entre múltiplos squads e garantindo consistência na entrega.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Definição da estratégia de UX para o evento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Coordenação de times de design, produto e engenharia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Otimização de jornadas de descoberta e conversão</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Implementação de componentes de urgência e escassez</span>
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">4</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvemos uma estratégia focada em três pilares principais:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#21C25E] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ofertas Relâmpago</h4>
                      <p className="text-sm">Sistema de ofertas com contagem regressiva e estoque limitado para criar senso de urgência.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#21C25E] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cashbacks Imbatíveis</h4>
                      <p className="text-sm">Destaque visual para cashbacks exclusivos, integrando com o ecossistema financeiro do PicPay.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#21C25E] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Navegação Otimizada</h4>
                      <p className="text-sm">Categorização inteligente e busca aprimorada para facilitar a descoberta de produtos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Crescimento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">5</span>
                Crescimento Consistente
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  O crescimento foi consistente em toda a operação, demonstrando o sucesso 
                  da estratégia implementada:
                </p>
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#21C25E]/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#21C25E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">+104% em transações</h4>
                      <p className="text-sm text-zinc-400">Comparado a novembro de 2024</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#21C25E]/10 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#21C25E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">+68% em acessos</h4>
                      <p className="text-sm text-zinc-400">Média de acessos ao PicPay Shop na comparação anual</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#21C25E]/10 rounded-xl flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-[#21C25E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">4x mais vendas de smartphones</h4>
                      <p className="text-sm text-zinc-400">No dia da Black Friday</p>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#21C25E]/10 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#21C25E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2x na procura por televisores</h4>
                      <p className="text-sm text-zinc-400">Dobrou a demanda na data</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ecossistema */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">6</span>
                Um Ecossistema Completo
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Os resultados da Black Friday 2025 reforçam o papel do PicPay como um 
                  <strong className="text-white"> ecossistema de consumo completo</strong>, 
                  onde o usuário encontra:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Produtos:</strong> Eletrônicos, moda, casa e muito mais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Viagens:</strong> Passagens, hospedagens e pacotes completos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Benefícios:</strong> Cashback e vantagens exclusivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Meios de pagamento:</strong> Flexibilidade total integrada ao app</span>
                  </li>
                </ul>
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">7</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-[#21C25E]/20 to-zinc-900/50 rounded-2xl border border-[#21C25E]/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-[#21C25E]">3x</p>
                      <p className="text-zinc-400 mt-2">GMV triplicado</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-[#21C25E]">Recorde</p>
                      <p className="text-zinc-400 mt-2">Melhor desempenho desde o lançamento</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#21C25E]/30">
                    <p className="text-zinc-300">
                      Com o desempenho recorde do PicPay Shop, o caminho está aberto para novas 
                      oportunidades de crescimento para marcas, parceiros e consumidores. A Black Friday 
                      2025 consolidou o PicPay como referência em experiência de consumo integrada.
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
                <span className="w-8 h-8 bg-[#21C25E]/20 rounded-lg flex items-center justify-center text-[#21C25E] text-sm font-bold">8</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  O sucesso da Black Friday 2025 trouxe insights valiosos para o futuro do PicPay Shop:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>A integração entre consumo e tecnologia financeira é um diferencial competitivo único.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Ofertas contextuais e personalizadas geram maior engajamento que promoções genéricas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#21C25E] rounded-full mt-2 flex-shrink-0" />
                    <span>Performance e estabilidade são tão importantes quanto a experiência visual durante picos de acesso.</span>
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
              Ficarei feliz em compartilhar mais detalhes sobre a estratégia e os resultados alcançados.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#21C25E] text-black font-semibold rounded-2xl hover:bg-[#1da64e] transition-all duration-300"
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
