import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function DigitalBankingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0033A0] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Banking Digital: Revolucionando Serviços Financeiros
          </h1>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740595955181-SfP7w4V7Ze2vLjUZ0SvIgxIVDwQygf.jpeg"
          alt="Interface de Banking Digital"
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
              className="bg-[#0033A0] hover:bg-[#0033A0]/90 text-white flex items-center gap-2 px-6 py-6 text-lg mb-2"
              asChild
            >
              <a
                href="https://www.linkedin.com/posts/robson-c-ramos_que-felicidade-minha-terceira-passagem-activity-7300588586641326080-YcW1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAf5KKYBgCZaKWlTBS7A4b0yRiMTt3SLAs4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja o projeto completo
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-400">Nota: O link pode não estar acessível no momento.</p>
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-400">
                Como UX Manager do time BS2, nossa missão foi transformar a experiência de banking digital para uma das
                principais instituições financeiras de pessoas jurídicas do Brasil, criando uma plataforma inovadora e
                centrada no usuário que estabeleceria novos padrões no setor. Trazzendo assim uma experiência Banking
                completa para os seus usuários com os principais serviços para empresas de pequeno, médio e grande
                porte.
              </p>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cliente</h2>
                <p className="text-gray-400">Grande Banco Brasileiro</p>
                <p className="text-gray-400">São Paulo, Brasil</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                <ul className="text-gray-400 space-y-2">
                  <li>Estratégia UX</li>
                  <li>Design de Banking Digital</li>
                  <li>Desenvolvimento de Aplicativo Móvel</li>
                  <li>Pesquisa com Usuários</li>
                  <li>Integração de Segurança</li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Minhas Contribuições</h2>
            <p className="text-gray-400 mb-6">
              Liderei o time que tocou o redesign completo da plataforma de banking digital, focando na criação de uma
              experiência de usuário intuitiva e segura. Desenvolvemos soluções inovadoras, incluindo:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Aplicativo móvel intuitivo e amigável para tarefas bancárias cotidianas</li>
              <li>Recursos avançados de segurança com autenticação biométrica</li>
              <li>Insights financeiros personalizados e recomendações</li>
              <li>Integração de chatbot com IA para suporte ao cliente</li>
              <li>Integração perfeita entre serviços bancários online e offline</li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Impacto</h2>
            <p className="text-gray-400 mb-4">
              A nova plataforma de banking digital alcançou resultados significativos:
            </p>
            <ul className="text-gray-400 space-y-4 list-disc pl-6">
              <li>Aumento de 150% na adoção do banking móvel</li>
              <li>Redução de 40% nas chamadas de suporte ao cliente</li>
              <li>Melhoria de 60% nos índices de satisfação do cliente</li>
              <li>Medidas de segurança aprimoradas com zero violações reportadas</li>
              <li>Aumento significativo no volume de transações digitais</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
