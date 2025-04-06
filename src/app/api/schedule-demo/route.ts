import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, title } = await request.json()

    // Validar campos obrigatórios
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Configurar o transporte de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const isProposal = title === "Solicitar Proposta"
    const subject = isProposal 
      ? `Nova solicitação de proposta - ${name}`
      : `Nova solicitação de demonstração - ${name}`
    
    const html = isProposal
      ? `
        <h1>Nova solicitação de proposta</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
      `
      : `
        <h1>Nova solicitação de demonstração</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
      `

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kanzapinc@gmail.com', // Email que receberá as solicitações
      subject,
      html,
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: isProposal ? 'Solicitação de proposta enviada com sucesso!' : 'Demonstração agendada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar solicitação:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação' },
      { status: 500 }
    )
  }
} 