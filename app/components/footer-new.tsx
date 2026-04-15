"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Mail, ArrowUpRight, X, Copy, Check } from "lucide-react"

export default function FooterNew() {
  const currentYear = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const email = "robsonramosux@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar email
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Vamos conversar!
                  </h3>
                  
                  <p className="text-zinc-400 mb-6">
                    Estou esperando o seu contato para criarmos produtos digitais incriveis.
                  </p>

                  {/* Email Box */}
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-zinc-500 mb-2">Meu email</p>
                    <p className="text-lg text-white font-medium break-all">{email}</p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className={`w-full inline-flex items-center justify-center px-6 py-4 font-semibold rounded-2xl transition-all duration-300 ${
                      copied
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-black hover:bg-zinc-200"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Email copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-5 w-5" />
                        Copiar email
                      </>
                    )}
                  </button>

                  {/* Alternative: Open Mail Client */}
                  <a
                    href={`mailto:${email}`}
                    className="inline-block mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Ou abrir no seu cliente de email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
