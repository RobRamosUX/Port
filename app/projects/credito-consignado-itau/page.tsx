import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CreditoConsignadoItauPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#EC7000] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Crédito Consignado Itaú: Simplificando Empréstimos Pessoais
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%2011.55.42-su41Uu4KsvIaRyNzhhn5Sq07YX9484.png"
          alt="Interface do Crédito Consignado Itaú"
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
              className="bg-[#EC7000] hover:bg-[#EC7000]/90 text-white flex items-center gap-2 px-6 py-6 text-lg mb-2"
              asChild
            >
              <a href="https://emprestimo.itau.com.br/emprestimo-consignado/" target="_blank" rel="noopener noreferrer">
                Veja o projeto completo
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-400">
              Nota: Este link leva ao site oficial do Itaú para Empréstimo Consignado.
            </p>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Como UX Lead no projeto de Crédito Consignado do Itaú, nossa missão foi revolucionar a experiência de
                solicitação e gestão de empréstimos consignados, tornando-a mais acessível, transparente e centrada no
                usuário. Nosso objetivo era criar uma plataforma digital intuitiva que simplificasse o processo de
                empréstimo, fornecesse informações claras e permitisse aos clientes tomar decisões financeiras
                informadas com facilidade e confiança.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">Itaú Unibanco</p>
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
              Liderando a equipe de UX, focamos em criar uma experiência de usuário excepcional para o produto de
              Crédito Consignado do Itaú. Nossas principais contribuições incluíram:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Redesenho completo do fluxo de solicitação de empréstimo, reduzindo o tempo de aplicação em 40%</li>
              <li>Implementação de um simulador de empréstimo interativo e fácil de usar</li>
              <li>Criação de um dashboard personalizado para acompanhamento de empréstimos e pagamentos</li>
              <li>Desenvolvimento de um sistema de notificações inteligentes para alertas importantes</li>
              <li>Integração de um chatbot para suporte instantâneo e esclarecimento de dúvidas</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              O novo sistema de Crédito Consignado do Itaú teve um impacto significativo, tanto para o banco quanto para
              os clientes:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Aumento de 60% na satisfação do cliente com o processo de empréstimo</li>
              <li>Redução de 30% nas chamadas para o suporte ao cliente relacionadas a dúvidas sobre empréstimos</li>
              <li>Crescimento de 25% no volume de empréstimos consignados contratados via plataforma digital</li>
              <li>Melhoria de 50% na taxa de conclusão de solicitações de empréstimo iniciadas</li>
              <li>
                Reconhecimento do setor com o prêmio "Melhor Inovação em Serviços Financeiros" no ano de lançamento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

