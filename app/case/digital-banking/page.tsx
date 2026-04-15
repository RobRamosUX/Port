"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function DigitalBankingCase() {
  const metrics = [
    { value: "2%", label: "Adoção inicial", icon: <Target className="h-5 w-5" /> },
    { value: "26%", label: "Adoção final", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "+1200%", label: "Crescimento", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "3 meses", label: "Tempo de implementação", icon: <Clock className="h-5 w-5" /> },
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
              Como aumentei a adoção de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                2% para 26%
              </span>{" "}
              redesenhando a jornada de um produto financeiro
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Um case de transformação através de design estratégico, onde o foco em entender 
              o problema real do negócio levou a resultados exponenciais.
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740595955181-SfP7w4V7Ze2vLjUZ0SvIgxIVDwQygf.jpeg"
              alt="Digital Banking Interface"
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
                  O produto em questão era uma funcionalidade de crédito dentro do app de um grande banco. 
                  Apesar de ser uma linha de crédito com condições competitivas, a taxa de adoção estava 
                  estagnada em apenas 2% dos clientes elegíveis.
                </p>
                <p>
                  A equipe de produto já havia tentado algumas iniciativas de comunicação e push notifications, 
                  mas sem resultados significativos. Era hora de olhar para o problema de uma perspectiva diferente.
                </p>
              </div>
            </motion.div>

            {/* Problema de Negócio */}
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
                  A baixa adesão ao produto estava impactando diretamente a receita do banco. 
                  Com milhões de clientes elegíveis, cada ponto percentual de aumento representava 
                  um impacto significativo no resultado.
                </p>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <p className="text-lg text-white font-medium">
                    &ldquo;Como podemos aumentar a adoção do produto de crédito sem aumentar o custo de aquisição?&rdquo;
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">3</span>
                Minha Atuação
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Assumi a <strong className="text-white">liderança de design</strong> nesta frente, 
                  trabalhando em parceria direta com o PM e o Tech Lead. Meu papel foi além de criar 
                  interfaces — fui responsável por:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Liderar a fase de discovery e definição do problema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Definir a estratégia de redesign da jornada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Coordenar testes de usabilidade e validações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Garantir alinhamento entre stakeholders</span>
                  </li>
                </ul>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">4</span>
                Descoberta
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Através de análise de dados de comportamento, entrevistas com usuários e mapeamento 
                  da jornada atual, identificamos três pontos críticos:
                </p>
                <div className="grid gap-4">
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Falta de clareza no valor</h4>
                    <p className="text-sm">Usuários não entendiam por que aquele crédito era melhor que outras opções disponíveis.</p>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Jornada fragmentada</h4>
                    <p className="text-sm">O produto estava &ldquo;escondido&rdquo; em um menu secundário, exigindo muitos cliques para acessar.</p>
                  </div>
                  <div className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <h4 className="text-white font-semibold mb-2">Abandono na simulação</h4>
                    <p className="text-sm">70% dos usuários que iniciavam uma simulação desistiam antes de concluir.</p>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">5</span>
                Estratégia
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Antes de qualquer wireframe, definimos uma estratégia clara baseada nos insights:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Reposicionar a entrada</h4>
                      <p className="text-sm">Trazer o produto para contextos de uso natural, não apenas em um menu.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Simplificar a simulação</h4>
                      <p className="text-sm">Reduzir etapas e mostrar o valor logo no início.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Criar gatilhos de conversão</h4>
                      <p className="text-sm">Usar momentos oportunos para apresentar o produto de forma contextual.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">6</span>
                Solução Final
              </h2>
              <div className="pl-11 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  A solução envolveu uma reformulação completa da jornada, com foco em três pilares:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Nova arquitetura de acesso:</strong> O produto passou a aparecer em contextos relevantes, como após uma consulta de saldo ou em momentos de necessidade financeira identificados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Simulação simplificada:</strong> De 7 etapas para 3, com preview do valor disponível logo no início.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Proposta de valor clara:</strong> Comparativo visual mostrando as vantagens em relação a outras modalidades de crédito.</span>
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">7</span>
                Resultados
              </h2>
              <div className="pl-11">
                <div className="p-8 bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 rounded-2xl border border-emerald-900/30">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-5xl font-bold text-emerald-400">26%</p>
                      <p className="text-zinc-400 mt-2">Taxa de adoção final</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-emerald-400">+1200%</p>
                      <p className="text-zinc-400 mt-2">Crescimento vs. baseline</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-emerald-900/30">
                    <p className="text-zinc-300">
                      O resultado superou as expectativas iniciais, que eram de alcançar 10% de adoção. 
                      O sucesso do projeto levou à expansão da abordagem para outros produtos do banco.
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
                <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 text-sm font-bold">8</span>
                Aprendizados
              </h2>
              <div className="pl-11 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Este projeto reforçou algumas convicções importantes sobre como abordar problemas de produto:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>O problema raramente é &ldquo;a interface&rdquo;. Quase sempre é a jornada ou a proposta de valor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Dados qualitativos e quantitativos juntos contam uma história mais completa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Alinhar stakeholders desde o início economiza retrabalho e acelera a entrega.</span>
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
