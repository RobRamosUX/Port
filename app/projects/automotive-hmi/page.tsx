import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function AutomotiveHMIPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            HMI Automotivo: Interface Veicular de Nova Geração
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7bN2De06hoYll2eTlvTx-Q-bVSzN1qDCFHu4fhfk0KNnSGgcJsQSp.webp"
          alt="Interface HMI Automotiva"
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
              className="bg-zinc-700 hover:bg-zinc-600 text-white flex items-center gap-2 px-6 py-6 text-lg"
              asChild
            >
              <a
                href="https://robsonramosux.medium.com/ux-ui-no-setor-automotivo-55231a54c55b"
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
                Liderei o desenvolvimento de uma Interface Homem-Máquina (HMI) de próxima geração para aplicações
                automotivas para a Ford, focando na criação de uma experiência de usuário super intuitiva e inovadora, mais segura e envolvente para
                motoristas e passageiros. 
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">Grande Fabricante Automotivo</p>
                <p className="text-gray-400">São Paulo, Brasil</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Design de HMI</li>
                  <li>Pesquisa com Usuários</li>
                  <li>Desenvolvimento de Interface</li>
                  <li>Testes de Usabilidade</li>
                  <li>Integração de Sistemas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Liderei o design e desenvolvimento do sistema HMI automotivo, focando em:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Design de interface intuitivo otimizado para a segurança do motorista</li>
              <li>Integração com sistemas veiculares e recursos inteligentes</li>
              <li>Capacidades de controle por voz e reconhecimento de gestos</li>
              <li>Perfis de usuário personalizáveis e preferências</li>
              <li>Exibição de informações do veículo em tempo real</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              O sistema HMI alcançou sucesso significativo em aplicações do mundo real:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Redução de 40% na distração do motorista</li>
              <li>Aumento de 85% nos índices de satisfação do usuário</li>
              <li>Melhoria de 60% no tempo de resposta do sistema</li>
              <li>Recursos de conectividade veicular aprimorados</li>
              <li>Feedback positivo de especialistas do setor e usuários</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
