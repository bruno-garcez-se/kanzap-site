'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Como posso começar a usar o Kanzap?',
      answer: 'É muito simples! Basta entrar em contato conosco pelo WhatsApp ou preencher o formulário de solicitação de proposta. Nossa equipe irá entender suas necessidades e criar um plano personalizado para sua empresa.'
    },
    {
      question: 'Preciso instalar algum software adicional?',
      answer: 'Não é necessário instalar nenhum software adicional. O Kanzap é uma plataforma totalmente baseada na web, acessível através de qualquer navegador moderno. Basta fazer login e começar a usar.'
    },
    {
      question: 'Posso usar mais de um número de WhatsApp?',
      answer: 'Sim, você pode conectar múltiplos números de WhatsApp à sua conta Kanzap. Cada plano oferece um número específico de conexões, e você pode gerenciar todos eles através de uma única interface.'
    },
    {
      question: 'Como funcionam as integrações com outras plataformas?',
      answer: 'O Kanzap oferece integrações nativas com diversas plataformas como Facebook Messenger, Instagram e Mercado Livre. Cada integração tem um custo adicional de R$ 60,00 por mês.'
    },
    {
      question: 'É possível automatizar mensagens e respostas?',
      answer: 'Sim, o Kanzap oferece recursos avançados de automação. Você pode criar fluxos de mensagens automáticas, respostas predefinidas e chatbots personalizados para otimizar seu atendimento.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5 relative">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#213365] mb-6">
            Perguntas <span className="text-[#eb594c]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#213365] group-hover:text-[#eb594c] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 text-[#eb594c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 