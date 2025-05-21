"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740595955181-SfP7w4V7Ze2vLjUZ0SvIgxIVDwQygf.jpeg",
      alt: "Banking App Interface",
      title: "Digital Banking UX",
      link: "/projects/digital-banking",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4uhos97b93RHpk198pzvUw-xW0KYZADFUTX1IGQLocVgwkbWNnbaF.webp",
      alt: "O Boticário Store Design",
      title: "Retail Experience",
      link: "/projects/retail-experience",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7bN2De06hoYll2eTlvTx-Q-bVSzN1qDCFHu4fhfk0KNnSGgcJsQSp.webp",
      alt: "Car Dashboard Interface",
      title: "Automotive HMI",
      link: "/projects/automotive-hmi",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_KAHvf_ZTfRK48Rdm-g1SdEerX3K0oL1IJDJ3mQlEA0behZJ.webp",
      alt: "Enterprise Solutions",
      title: "Corporate UX",
      link: "/projects/corporate-ux",
    },
  ]

  return (
    <section id="featured-works" className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trabalhos em Destaque
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <Link href={image.link} key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

