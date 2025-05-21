import Link from "next/link"

export default function TimesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-emerald-500 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Times dos Quais Geri</h1>
        </div>
        <img
          src="/placeholder.svg?height=1080&width=1920&query=diverse%20design%20team%20collaboration"
          alt="Times de Design"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
            &larr; Voltar para Home
          </Link>

          {/* Leadership Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Filosofia de Liderança</h2>
            <p className="text-gray-400 mb-8">
              Minha abordagem de liderança é centrada em capacitar equipes para alcançar seu máximo potencial através de
              colaboração, comunicação aberta e aprendizado contínuo. Acredito que as melhores soluções surgem quando
              diversas perspectivas são valorizadas e quando cada membro da equipe se sente seguro para contribuir com
              suas ideias únicas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4 text-emerald-500">🌱</div>
                <h3 className="text-xl font-bold text-white mb-2">Crescimento</h3>
                <p className="text-gray-400">
                  Foco no desenvolvimento contínuo de habilidades técnicas e interpessoais de cada membro da equipe.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4 text-emerald-500">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">Colaboração</h3>
                <p className="text-gray-400">
                  Promoção de um ambiente onde a colaboração interdisciplinar é valorizada e incentivada.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4 text-emerald-500">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">Propósito</h3>
                <p className="text-gray-400">
                  Alinhamento claro entre os objetivos da equipe e a missão maior da organização.
                </p>
              </div>
            </div>
          </div>

          {/* Teams */}
          <div className="space-y-16 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Equipes Lideradas</h2>

            {/* Team 1 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Equipe de UX no Banco BS2</h3>
                <p className="text-emerald-400 mb-6">2022 - Presente</p>
                <p className="text-gray-400 mb-6">
                  Lidero uma equipe multidisciplinar de 12 profissionais, incluindo UX designers, UI designers,
                  pesquisadores e content designers. Juntos, redesenhamos completamente a plataforma digital do banco,
                  resultando em um aumento significativo na satisfação do cliente e na eficiência operacional.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Composição da Equipe:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>5 UX/UI Designers</li>
                    <li>3 Pesquisadores UX</li>
                    <li>2 Content Designers</li>
                    <li>2 Product Designers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Principais Conquistas:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>Implementação de um design system unificado</li>
                    <li>Redução de 40% no tempo de conclusão de tarefas pelos usuários</li>
                    <li>Aumento de 60% na satisfação do cliente com a plataforma digital</li>
                    <li>Estabelecimento de processos de design centrado no usuário em toda a organização</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team 2 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Equipe de UX no Itaú Unibanco</h3>
                <p className="text-emerald-400 mb-6">2019 - 2022</p>
                <p className="text-gray-400 mb-6">
                  Liderou uma equipe de 8 profissionais responsáveis pelo design de experiência do usuário para produtos
                  financeiros digitais. Implementou metodologias de pesquisa com usuários e testes de usabilidade que
                  resultaram em melhorias significativas na experiência do cliente.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Composição da Equipe:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>4 UX/UI Designers</li>
                    <li>2 Pesquisadores UX</li>
                    <li>2 Designers de Interação</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Principais Conquistas:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>Redesenho do aplicativo móvel com aumento de 40% na satisfação do usuário</li>
                    <li>Implementação de processos de design thinking em toda a organização</li>
                    <li>Desenvolvimento de um programa de pesquisa contínua com usuários</li>
                    <li>Criação de um laboratório de usabilidade interno</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team 3 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Equipe de Design no Grupo Boticário</h3>
                <p className="text-emerald-400 mb-6">2016 - 2019</p>
                <p className="text-gray-400 mb-6">
                  Coordenou uma equipe de 6 designers responsáveis pelo design de experiência do usuário para
                  plataformas de e-commerce e aplicativos móveis. Trabalhou em estreita colaboração com equipes de
                  produto, marketing e tecnologia para criar experiências digitais coesas e centradas no usuário.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Composição da Equipe:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>3 UX/UI Designers</li>
                    <li>2 Visual Designers</li>
                    <li>1 Pesquisador UX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Principais Conquistas:</h4>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>Redesenho da plataforma de e-commerce com aumento de 35% na taxa de conversão</li>
                    <li>Desenvolvimento de um aplicativo de fidelidade premiado</li>
                    <li>Implementação de processos de pesquisa com usuários</li>
                    <li>Criação de um sistema de design unificado para todas as marcas do grupo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Approach */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Abordagem de Gestão</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Mentoria e Desenvolvimento</h3>
                <p className="text-gray-400">
                  Invisto tempo significativo no desenvolvimento individual de cada membro da equipe, oferecendo
                  mentoria personalizada, feedback construtivo e oportunidades de crescimento alinhadas com seus
                  interesses e objetivos de carreira.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Cultura de Feedback</h3>
                <p className="text-gray-400">
                  Promovo uma cultura de feedback contínuo e bidirecional, onde todos se sentem à vontade para
                  compartilhar ideias, questionar decisões e propor melhorias, criando um ambiente de aprendizado
                  constante.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Autonomia com Responsabilidade</h3>
                <p className="text-gray-400">
                  Concedo autonomia aos membros da equipe para tomar decisões e resolver problemas, ao mesmo tempo em
                  que estabeleço expectativas claras e os mantenho responsáveis pelos resultados.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Comunicação Transparente</h3>
                <p className="text-gray-400">
                  Mantenho uma comunicação aberta e transparente sobre objetivos, desafios e decisões, garantindo que
                  todos na equipe compreendam o contexto mais amplo e se sintam parte do processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
