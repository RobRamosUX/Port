"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

export default function FooterNew() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-black border-t border-zinc-800">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos construir algo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              juntos?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            Estou sempre aberto a conversas sobre produto, design e oportunidades de impacto.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:robson@email.com"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar email
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/robsonramoss"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-zinc-800/50 text-white font-semibold rounded-2xl border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 w-full sm:w-auto"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} Robson Ramos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/robsonramoss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:robson@email.com"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
