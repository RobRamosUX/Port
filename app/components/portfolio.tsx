"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Portfolio() {
  const works = [
    {
      id: 1,
      title: "Crédito Consignado Itaú",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%2011.55.42-su41Uu4KsvIaRyNzhhn5Sq07YX9484.png",
      year: "UX Design",
      link: "/projects/credito-consignado-itau",
    },
    {
      id: 2,
      title: "Cartão Free Santander",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_gerencie_seus_gastos_app_v0.jpg-7CdB6FYlnJM1cxAHn3IQZaeLXFwAyR.jpeg",
      year: "UX Design",
      link: "/projects/cartao-free-santander",
    },
    {
      id: 3,
      title: "Mentoria na Tera",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TERA-PREVIA.jpg-8ko8AlzjJxDcfwGFCKjmGiQgER3ykr.jpeg",
      year: "Mentor",
      link: "/projects/mentoria-na-tera",
    },
    {
      id: 4,
      title: "Tagon Website",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-07%20102354-DFMHDp0ID12hJKZmPpy6lZVUjaRC07.png",
      year: "Visual Design",
      link: "https://www.behance.net/gallery/67759519/IUUX-Website-Tagon8",
    },
    {
      id: 5,
      title: "Samsung Landing page",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-07%20102832-ZkFRV91k3vdV1yvJSL7FjLfH2QzLP1.png",
      year: "Visual Design",
      link: "https://www.behance.net/gallery/57194565/Monitor-Curvo-Game-QLED-Samsung",
    },
    {
      id: 6,
      title: "UX Pravaler",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HOnrrfoYF745nDX791dHlzoZoeL6ou.png",
      year: "UX Design",
      link: "https://www.behance.net/gallery/75389123/Ux-Portal-PRAVALER",
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfólio</h2>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {works.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={work.link || "#"}>
                  <Card className="overflow-hidden bg-zinc-900 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                          <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
