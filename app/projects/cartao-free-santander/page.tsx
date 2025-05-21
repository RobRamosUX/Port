import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CartaoFreeSantanderPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#EC0000] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Cartão Free Santander: Revolucionando a Experiência Financeira
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_gerencie_seus_gastos_app_v0.jpg-7CdB6FYlnJM1cxAHn3IQZaeLXFwAyR.jpeg"
          alt="Interface do Cartão Free Santander"
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
              className="bg-[#EC0000] hover:bg-[#EC0000]/90 text-white flex items-center gap-2 px-6 py-6 text-lg mb-2"
              asChild
            >
              <a href="https://www.santander.com.br/cartoes/santander-free" target="_blank" rel="noopener noreferrer">
                Veja o projeto completo
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-400">Nota: Este link leva ao site oficial do Cartão Free Santander.</p>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Como UX Designer no projeto do Cartão Free Santander, nossa missão foi criar uma experiência de cartão de
                crédito inovadora e centrada no usuário, que atendesse às necessidades financeiras em constante evolução
                dos clientes modernos. Nosso objetivo era desenvolver uma plataforma digital intuitiva que não apenas
                simplificasse o gerenciamento financeiro, mas também oferecesse benefícios únicos e relevantes,
                promovendo a liberdade financeira e a educação dos usuários.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">Banco Santander</p>
                <p className="text-gray-400">São Paulo, Brasil</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Pesquisa de Usuário</li>
                  <li>Design de Experiência</li>
                  <li>Design de Interface</li>
                  <li>Prototipagem</li>
                  <li>Testes de Usabilidade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Focamos em criar uma experiência de usuário excepcional para o Cartão Free
              Santander. Nossas principais contribuições incluíram:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Desenvolvimento de um aplicativo móvel intuitivo para gerenciamento do cartão e finanças pessoais</li>
              <li>Criação de um sistema de categorização de gastos automático e personalizável</li>
              <li>Implementação de um dashboard interativo para visualização clara dos gastos e limites</li>
              <li>Design de um sistema de recompensas gamificado para incentivar o uso responsável do cartão</li>
              <li>Integração de ferramentas de educação financeira dentro do aplicativo</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              O lançamento do Cartão Free Santander e sua plataforma digital teve um impacto significativo:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Aumento de 70% na adesão ao cartão nos primeiros seis meses após o lançamento</li>
              <li>Melhoria de 45% na satisfação do cliente em relação aos serviços de cartão de crédito do banco</li>
              <li>Redução de 30% nas chamadas ao suporte relacionadas a dúvidas sobre fatura e limites</li>
              <li>Aumento de 50% no engajamento com ferramentas de educação financeira</li>
              <li>Reconhecimento como "Melhor Cartão de Crédito Digital" por uma publicação financeira líder</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
