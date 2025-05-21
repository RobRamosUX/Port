"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "../actions/contact"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{ success: boolean; message: string } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      const response = await submitContactForm(values)
      setFormResponse({
        success: response.success,
        message: response.success
          ? "Obrigado! Sua mensagem foi enviada com sucesso."
          : "Falha na validação. Por favor, verifique seus dados.",
      })

      if (response.success) {
        form.reset()
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
          <p className="mb-8 text-gray-400">
            Interessado em colaborar ou encomendar um projeto? Vamos criar algo incrível juntos.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          {formResponse && (
            <Alert
              className={`mb-6 ${formResponse.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"}`}
            >
              <AlertDescription>{formResponse.message}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome"
                        {...field}
                        className="bg-white text-black placeholder:text-gray-500 focus:bg-white focus:text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="seu@email.com"
                        {...field}
                        className="bg-white text-black placeholder:text-gray-500 focus:bg-white focus:text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-me sobre seu projeto..."
                        className="min-h-[120px] bg-white text-black placeholder:text-gray-500 focus:bg-white focus:text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
