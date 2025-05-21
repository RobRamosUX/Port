import Link from "next/link"

export default function TrajetoriaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
        {/* Conteúdo do header (à esquerda) */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 max-w-xl">Minha Trajetória</h1>
        </div>

        {/* Gradiente de fade da esquerda para a direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-[1]" />

        {/* Imagem posicionada à direita */}
        <div className="absolute top-0 right-0 h-full w-3/4 md:w-2/3 overflow-hidden">
          <img
            src="/trajetoria-background.jpg"
            alt="Robson Ramos apresentando em evento"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
            &larr; Voltar para Home
          </Link>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Jornada Profissional</h2>

            <div className="relative border-l-2 border-gray-700 pl-8 pb-8">
              {/* Timeline Item 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                <h3 className="text-xl font-bold text-white">UX Manager - Banco BS2</h3>
                <p className="text-blue-400 mb-4">2024 - Atual</p>
                <p className="text-gray-400 mb-4">
                  Lidero uma equipe multidisciplinar responsável pelo design e desenvolvimento de produtos digitais para
                  o setor bancário. Implementei metodologias ágeis e processos de design centrado no usuário, resultando
                  em um aumento significativo na satisfação do cliente e na eficiência operacional.
                </p>
                <ul className="text-gray-400 space-y-2 list-disc pl-5">
                  <li>Redesenho completo da plataforma digital de banking</li>
                  <li>Implementação de processos de design system</li>
                  <li>Liderança de equipe de 12 designers e pesquisadores</li>
                </ul>
              </div>

              {/* Timeline Item 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-amber-500"></div>
                <h3 className="text-xl font-bold text-white">UX Lead Grupo Boticário</h3>
                <p className="text-amber-400 mb-4">2023 - 2024</p>
                <p className="text-gray-400 mb-4">
                  Liderou iniciativas de UX para produtos de beleza e varejo, incluindo o redesenho de plataformas
                  digitais e experiências omnichannel. Implementei metodologias de pesquisa com usuários e testes de
                  usabilidade que resultaram em melhorias significativas na experiência do cliente.
                </p>
                <ul className="text-gray-400 space-y-2 list-disc pl-5">
                  <li>Redesenho da plataforma de e-commerce com aumento de 35% na taxa de conversão</li>
                  <li>Implementação de processos de design thinking em toda a organização</li>
                  <li>Desenvolvimento de um design system unificado para todas as marcas</li>
                </ul>
              </div>

              {/* Timeline Item 3 (NOVO) */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-orange-500"></div>
                <h3 className="text-xl font-bold text-white">UX Lead Banco Itaú</h3>
                <p className="text-orange-400 mb-4">2021 - 2023</p>
                <p className="text-gray-400 mb-4">
                  Liderou iniciativas de UX para produtos financeiros digitais, incluindo o redesenho do aplicativo
                  móvel e plataformas web. Implementei metodologias de pesquisa com usuários e testes de usabilidade que
                  resultaram em melhorias significativas na experiência do cliente.
                </p>
                <ul className="text-gray-400 space-y-2 list-disc pl-5">
                  <li>Redesenho do aplicativo móvel com aumento de 40% na satisfação do usuário</li>
                  <li>Implementação de processos de design thinking em toda a organização</li>
                  <li>Desenvolvimento de um design system unificado para produtos digitais</li>
                </ul>
              </div>

              {/* Timeline Item 4 (antigo item 3) */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-emerald-500"></div>
                <h3 className="text-xl font-bold text-white">Product Design Manager of UX/HMI | Connectivity | Innovation</h3>
                <p className="text-emerald-400 mb-4">2016 - 2019</p>
                <p className="text-gray-400 mb-4">
                  Responsável por definir e liderar a estratégia de design junto a unidade de negócios, tecnologia e inovação, que está reinventando os produtos e serviços com base na conectividade e no User Experience do setor de mobilidade no Brasil. Minhas responsabilidades incluem o direcionamento de pesquisa, a caracterização do público-alvo, a identificação de necessidades e pain points e o suporte em pesquisas, Customer Insights e Business Analysis. Também faço o direcionamento criativo, conceito, visão de design, experiência e interação com as áreas de Marketing, Business Development, General Management, Engineering e Product Management.
                  
                  Meu trabalho colabora para o futuro da mobilidade e conectividade do setor automotivo centrado no usuário.
                </p>
                <ul className="text-gray-400 space-y-2 list-disc pl-5">
                  <li>Redesenho da plataforma de e-commerce com aumento de 35% na taxa de conversão</li>
                  <li>Desenvolvimento de um aplicativo de fidelidade premiado</li>
                  <li>Implementação de processos de pesquisa com usuários</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Formação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Intensivo em Gestão de Negócios Digitais</h3>
                <p className="text-blue-400 mb-4">Faculdade Impacta Tecnologia</p>
                <p className="text-gray-400">2018 - 2020</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Bacharelado em Design Digital</h3>
                <p className="text-blue-400 mb-4">Universidade Anhembi Morumbi</p>
                <p className="text-gray-400">2012 - 2016</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">UX Design</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">UI Design</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Design Thinking</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Pesquisa com Usuários</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Prototipagem</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Design Systems</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Gestão de Equipes</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Metodologias Ágeis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
