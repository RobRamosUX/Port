import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Robson Ramos | Product Designer focado em crescimento e impacto",
  description:
    "Lidero e escalo experiências digitais orientadas a métricas, combinando estratégia, UX e visão de produto. Especialista em transformar desafios de negócio em soluções de design com resultados mensuráveis.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Robson Ramos | Product Designer",
    description: "Product Designer focado em crescimento e impacto de negócio",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-black">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
