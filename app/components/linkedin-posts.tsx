"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkedinIcon as LinkedInIcon } from "lucide-react"

const posts = [
  {
    id: 1,
    content:
      "Empolgado em compartilhar meu projeto mais recente sobre design de HMI automotivo! Confira como estamos revolucionando a experiência dentro do carro. #UXDesign #AutomotiveHMI",
    date: "3d atrás",
    likes: 127,
    comments: 23,
  },
  {
    id: 2,
    content:
      "Acabei de publicar um novo artigo sobre o futuro do UX no varejo. Como as inovações digitais estão moldando a forma como compramos? Leia mais no meu blog! #RetailUX #TransformaçãoDigital",
    date: "1sem atrás",
    likes: 215,
    comments: 42,
  },
  {
    id: 3,
    content:
      "Honrado em ser palestrante na próxima Conferência de UX em São Paulo. Quem mais estará lá? Vamos nos conectar! #ConferênciaUX #Networking",
    date: "2sem atrás",
    likes: 189,
    comments: 31,
  },
]

export default function LinkedInPosts() {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Posts Recentes do LinkedIn</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{post.date}</span>
                    <div className="flex space-x-4">
                      <span>{post.likes} curtidas</span>
                      <span>{post.comments} comentários</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild className="inline-flex items-center bg-black text-white hover:bg-black/80 border-white/20">
            <a href="https://www.linkedin.com/in/robson-c-ramos/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="mr-2 h-4 w-4" />
              Ver Mais no LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
