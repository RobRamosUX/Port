import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-amber-500 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Meus Principais Projetos</h1>
        </div>
        <img
          src="/placeholder.svg?height=1080&width=1920&query=portfolio%20showcase%20projects"
          alt="Principais Projetos"
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

          {/* Projects Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Visão Geral</h2>
            <p className="text-gray-400 mb-8">
              Ao longo da minha carreira, tive o privilégio de liderar e contribuir para diversos projetos inovadores
              que transformaram a experiência digital de usuários em diferentes setores. Abaixo, compartilho alguns dos
              projetos mais significativos que demonstram minha abordagem centrada no usuário e meu compromisso com a
              excelência em design.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-16">
            {/* Project 1 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%2011.55.42-su41Uu4KsvIaRyNzhhn5Sq07YX9484.png"
                  alt="Crédito Consignado Itaú"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Crédito Consignado Itaú</h3>
                  <p className="text-amber-400">UX Design Lead</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Liderou o redesenho completo da plataforma de crédito consignado do Itaú, simplificando o processo de
                  solicitação e aprovação de empréstimos. O projeto resultou em um aumento de 60% na satisfação do
                  cliente e uma redução de 40% no tempo de processamento.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/projects/credito-consignado-itau">Ver detalhes do projeto</Link>
                </Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_gerencie_seus_gastos_app_v0.jpg-7CdB6FYlnJM1cxAHn3IQZaeLXFwAyR.jpeg"
                  alt="Cartão Free Santander"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Cartão Free Santander</h3>
                  <p className="text-amber-400">UX Designer</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Desenvolveu a experiência do usuário para o inovador Cartão Free Santander, focando em uma interface
                  intuitiva e ferramentas de gestão financeira. O projeto resultou em um aumento de 70% na adesão ao
                  cartão e uma melhoria de 45% na satisfação do cliente.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/projects/cartao-free-santander">Ver detalhes do projeto</Link>
                </Button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4uhos97b93RHpk198pzvUw-xW0KYZADFUTX1IGQLocVgwkbWNnbaF.webp"
                  alt="Experiência de Varejo O Boticário"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Experiência de Varejo O Boticário</h3>
                  <p className="text-amber-400">UX Designer</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Redesenhou a experiência de varejo para O Grupo Boticário, integrando canais digitais e físicos para
                  criar uma jornada omnichannel perfeita. O projeto resultou em um aumento significativo no engajamento
                  do cliente e nas vendas através da integração omnichannel.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/projects/retail-experience">Ver detalhes do projeto</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Metodologias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Design Thinking</h3>
                <p className="text-gray-400">
                  Aplico o processo de Design Thinking em todos os meus projetos, começando com a empatia pelo usuário,
                  definindo claramente o problema, idealizando soluções criativas, prototipando rapidamente e testando
                  iterativamente.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Agile UX</h3>
                <p className="text-gray-400">
                  Integro práticas de UX com metodologias ágeis para garantir que o design centrado no usuário seja
                  incorporado em todo o ciclo de desenvolvimento, permitindo iterações rápidas e feedback contínuo.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Design Systems</h3>
                <p className="text-gray-400">
                  Desenvolvo e implemento sistemas de design robustos que garantem consistência, escalabilidade e
                  eficiência em todos os produtos digitais, facilitando a colaboração entre designers e desenvolvedores.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Pesquisa com Usuários</h3>
                <p className="text-gray-400">
                  Conduzo pesquisas qualitativas e quantitativas para entender profundamente as necessidades,
                  comportamentos e pontos de dor dos usuários, informando decisões de design baseadas em dados reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
