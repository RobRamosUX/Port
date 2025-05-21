import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function MentoriaNaTeraPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#00A8E1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Mentoria na Tera: Formando a Próxima Geração de Product Designers
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TERA-PREVIA.jpg-8ko8AlzjJxDcfwGFCKjmGiQgER3ykr.jpeg"
          alt="Mentoria na Tera"
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
          <div className="mb-16 flex flex-col items-start">
            <Button
              className="bg-[#00A8E1] hover:bg-[#00A8E1]/90 text-white flex items-center gap-2 px-6 py-6 text-lg mb-2"
              asChild
            >
              <a href="https://somostera.com/" target="_blank" rel="noopener noreferrer">
                Saiba mais sobre a Tera
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-400">Nota: Este link leva ao site oficial da Tera.</p>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Como mentor na Tera por dois anos, minha missão foi capacitar e inspirar a próxima geração de Product
                Designers. Através de aulas online e mentorias individuais, busquei não apenas transmitir conhecimentos
                técnicos, mas também cultivar habilidades essenciais como pensamento crítico, resolução criativa de
                problemas e empatia pelo usuário. Meu objetivo era preparar os alunos para os desafios reais do mercado
                de trabalho, fornecendo uma base sólida em design de produto e UX/UI.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Instituição</h2>
                <p className="text-gray-400">Tera</p>
                <p className="text-gray-400">São Paulo, Brasil (Online)</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Áreas de Atuação</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Product Design</li>
                  <li>UX/UI Design</li>
                  <li>Design Thinking</li>
                  <li>Pesquisa de Usuário</li>
                  <li>Prototipagem</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Durante minha jornada como mentor na Tera, tive o privilégio de impactar positivamente a carreira de mais
              de 40 alunos. Minhas principais contribuições incluíram:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Desenvolvimento e ministração de aulas online sobre Product Design e UX/UI</li>
              <li>
                Mentoria individual para mais de 40 alunos, oferecendo feedback personalizado e orientação de carreira
              </li>
              <li>Criação de exercícios práticos e projetos que simulavam desafios reais do mercado</li>
              <li>Orientação em projetos finais, ajudando os alunos a construir portfólios impressionantes</li>
              <li>Compartilhamento de insights da indústria e tendências atuais em design de produto</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              O impacto da mentoria na Tera foi significativo, tanto para os alunos quanto para mim como profissional:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>
                Mais de 80% dos mentorados conseguiram colocação no mercado como Product Designers ou UX/UI Designers
              </li>
              <li>Aumento médio de 40% na confiança dos alunos em suas habilidades de design</li>
              <li>Diversos projetos dos alunos foram reconhecidos em competições de design</li>
              <li>Estabelecimento de uma rede profissional sólida entre alunos e mentores</li>
              <li>Aprimoramento das minhas próprias habilidades de liderança e comunicação</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
