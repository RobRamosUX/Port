import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CorporateUXPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-zinc-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            UX Corporativo: Transformando Plataformas de Negócios
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_KAHvf_ZTfRK48Rdm-g1SdEerX3K0oL1IJDJ3mQlEA0behZJ.webp"
          alt="Plataforma UX Corporativa"
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
              className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 px-6 py-6 text-lg mb-2"
              asChild
            >
              <a
                href="https://robsonramosux.medium.com/product-designer-e-a-plataforma-pj-b92390cf7a1e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja o projeto completo
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-400">Nota: O conteúdo pode não estar disponível no momento.</p>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Liderei o desenvolvimento de um Hub Financeiro para empresas de todos os portes, simplificando a gestão
                financeira e otimizando a rotina de pagamentos e controle de contas. A plataforma foi projetada para
                oferecer uma experiência intuitiva, automatizando processos e proporcionando mais eficiência, segurança
                e visibilidade sobre as finanças do negócio.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">Provedor de Soluções Corporativas</p>
                <p className="text-gray-400">São Paulo, Brasil</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Pesquisa UX</li>
                  <li>Design de Plataforma</li>
                  <li>Testes com Usuários</li>
                  <li>Arquitetura de Sistema</li>
                  <li>Suporte à Implementação</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Liderei o redesign completo e desenvolvimento da plataforma corporativa, focando em:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Geração e rastreamento simplificados de faturas</li>
              <li>Cálculos e relatórios fiscais automatizados</li>
              <li>Ferramentas intuitivas de gestão de contratos</li>
              <li>Rastreamento e categorização de despesas</li>
              <li>Integração com softwares populares de contabilidade</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">A plataforma alcançou métricas significativas de sucesso:</p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Redução de 80% no tempo de tarefas administrativas</li>
              <li>Taxa de satisfação do usuário de 95%</li>
              <li>Mais de 10.000 usuários ativos no primeiro trimestre</li>
              <li>Redução significativa em erros contábeis</li>
              <li>Feedback positivo de clientes do setor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
