import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function RetailExperiencePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#00A651] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            O Grupo Boticário: Reinventando a Experiência de Varejo
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4uhos97b93RHpk198pzvUw-xW0KYZADFUTX1IGQLocVgwkbWNnbaF.webp"
          alt="Design de Loja O Boticário"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
            &larr; Voltar para Home
          </Link>

          {/* CTA Button */}
          <div className="mb-16 flex justify-start">
            <Button
              className="bg-[#00A651] hover:bg-[#00A651]/90 text-white flex items-center gap-2 px-6 py-6 text-lg"
              asChild
            >
              <a
                href="https://robsonramosux.medium.com/o-grupo-botic%C3%A1rio-7ecb36f2033a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja o projeto completo
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Como UX Lead no Grupo Boticário, nossa missão foi transformar a experiência de
                varejo por meio da integração estratégica entre o digital e o físico, elevando a jornada do consumidor a
                um novo patamar. Lideramos a criação de uma experiência omnichannel inovadora, alinhada às novas
                expectativas do mercado e às tendências de consumo, garantindo uma navegação fluida entre os canais
                online e offline. Por meio de design centrado no usuário, inovação tecnológica e inteligência de dados,
                desenvolvemos soluções que potencializaram a experiência de compra das franquias, aumentaram o engajamento e
                fortaleceram a conexão entre marca franqueado e consumidor. Nosso foco esteve na criação de uma jornada de compra
                e abastecimento mais intuitiva, personalizada e impactante, consolidando o Grupo Boticário como referência em inovação
                no varejo de beleza.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">O Grupo Boticário</p>
                <p className="text-gray-400">Curitiba, PR, Brasil</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Estratégia UX</li>
                  <li>Inovação Digital</li>
                  <li>Design de Varejo</li>
                  <li>Experiência do Cliente</li>
                  <li>Integração Digital</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Liderei junto time o redesign completo da experiência de varejo, focando na criação de uma integração perfeita entre
              ambientes de compra digitais e físicos. Desenvolvi soluções inovadoras, incluindo displays interativos,
              experiências virtuais de experimentação e jornadas de abatecimento e compra personalizadas.
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Displays digitais interativos nas lojas para mostrar produtos e fornecer informações</li>
              <li>
                Uma nova plataforma de abastecimento totalmente reformulada.
              </li>
              <li>Integração de experiências de compra inteligente baseada em dados da fabrica e do estoque.</li>
              <li>Recomendações de produtos personalizadas baseadas nas preferências dos clientes e ciclos.</li>
              <li>Experiências de realidade aumentada nas lojas para engajar os clientes</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              A experiência de varejo reimaginada foi um sucesso significativo para O Grupo Boticário:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Aumento no engajamento e nos índices de satisfação dos fraqueados</li>
              <li>Integração perfeita de experiências de compra digitais e físicas</li>
              <li>Maiores índices de satisfação do cliente</li>
              <li>Aumento nas vendas através da integração omnichannel</li>
              <li>Percepção da marca aprimorada como varejista inovador</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
