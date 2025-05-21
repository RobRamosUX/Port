"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

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

type FormData = z.infer<typeof formSchema>

// Configuração do transporter do nodemailer com Gmail
// Nota: Para Gmail, você pode precisar habilitar "Acesso a app menos seguro"
// ou usar uma "Senha de app" se tiver autenticação de dois fatores
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "883c03001@smtp-brevo.com",
    pass: "w73LjDXrfAytdUkJ",
  },
})

export async function submitContactForm(formData: FormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return {
      success: false,
      message: "Falha na validação. Por favor, verifique seus dados.",
    }
  }

  try {
    // Configurar o email
    const mailOptions = {
      from: '"Portfólio Robson Ramos" <883c03001@smtp-brevo.com>',
      to: "robsonramosux@gmail.com",
      subject: `Novo contato do site - ${formData.name}`,
      text: `
        Nome: ${formData.name}
        Email: ${formData.email}
        
        Mensagem:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Novo contato do site</h2>
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${formData.message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    }

    // Enviar o email usando Promise em vez de callback
    const info = await transporter.sendMail(mailOptions)
    console.log("Email enviado:", info.response)

    return {
      success: true,
      message: "Obrigado! Sua mensagem foi enviada com sucesso.",
    }
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return {
      success: false,
      message: "Falha ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    }
  }
}

