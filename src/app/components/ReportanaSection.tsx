'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ReportanaSection() {
  const [selectedTool, setSelectedTool] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Função para avançar para o próximo ícone
  const nextTool = () => {
    setSelectedTool((prev) => (prev + 1) % tools.length)
  }

  // Efeito para controlar o auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextTool, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  // Função para parar o auto-play quando o usuário interagir
  const handleInteraction = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const tools = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      title: 'Dashboard',
      description: 'Acompanhe métricas de atendimento, produtividade e satisfação com relatórios detalhados'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Chatbot',
      description: 'Automatize seus atendimentos com um chatbot personalizável para respostas rápidas'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: 'Pesquisa de Satisfação',
      description: 'Obtenha feedback dos clientes por meio de pesquisas automáticas ao final do atendimento'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Respostas Rápidas',
      description: 'Crie atalhos para mensagens frequentes e otimize o tempo da sua equipe'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'CRM com Kanban',
      description: 'Gerencie seus contatos e processos comerciais com um CRM visual no formato Kanban'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Atendimento Multicanal',
      description: 'Gerencie diferentes canais de comunicação em um único número para sua equipe'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z M12 19l9 2-2-9" />
        </svg>
      ),
      title: 'Disparo em Massa',
      description: 'Envie mensagens ilimitadas, tanto pelo chatbot quanto pelos atendentes humanos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Agendamento de Mensagens',
      description: 'Configure horários específicos de funcionamento para seus atendimentos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Relatórios e Monitoramento',
      description: 'Acompanhe métricas de atendimento, produtividade e satisfação com relatórios detalhados'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Criação de Tarefas',
      description: 'Atribua tarefas para sua equipe, acompanhe prazos e mantenha o fluxo de trabalho sempre organizado'
    }
  ]

  return (
    <section id="recursos" className="py-20 bg-white" onClick={handleInteraction}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#213365]">
            Todas <span className="text-[#eb594c]">ferramentas</span> que você precisa!
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa para transformar seu atendimento e aumentar suas vendas em uma única plataforma
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-nowrap gap-4 mb-8 pb-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex flex-col items-center text-center cursor-pointer group ${selectedTool === index ? 'scale-110' : ''}`}
                onClick={() => {
                  handleInteraction()
                  setSelectedTool(index)
                }}
              >
                <div className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${selectedTool === index ? 'text-[#eb594c]' : 'text-[#213365] group-hover:bg-[#eb594c] group-hover:text-white'}`}>
                  {React.cloneElement(tool.icon, { className: 'w-5 h-5' })}
                </div>
                <h3 className="text-xs font-semibold text-[#213365] whitespace-nowrap">{tool.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="text-center mb-6">
                <p className="text-2xl font-semibold text-[#213365]">{tools[selectedTool].description}</p>
              </div>
              
              <div className="relative w-full max-w-[1200px] mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#213365]/30 to-[#eb594c]/30 blur-3xl rounded-[32px]"></div>
                <div className="relative rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src={
                      selectedTool === 1 ? "/chatbot.png" : 
                      selectedTool === 2 ? "/pesquisa.png" :
                      "/dashboard-preview.png"
                    }
                    alt={
                      selectedTool === 1 ? "Chatbot Preview" :
                      selectedTool === 2 ? "Pesquisa de Satisfação Preview" :
                      "Dashboard Preview"
                    }
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -right-20 md:-right-24 bottom-[-10%] w-[240px]">
                  <div className="relative w-full">
                    <div className="absolute inset-0 transform scale-90 translate-y-4 bg-gradient-to-b from-black/30 to-transparent blur-xl rounded-[45px]"></div>
                    <div className="relative w-full aspect-[320/650] bg-white rounded-[45px] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-[14px] z-10"></div>
                      <div className="w-full h-full bg-white overflow-hidden">
                        <Image
                          src={
                            selectedTool === 1 ? "/chatbot_cel.jpg" :
                            selectedTool === 2 ? "/pesquisa_cel.jpg" :
                            "/precelular.jpg"
                          }
                          alt={
                            selectedTool === 1 ? "Chatbot Mobile Preview" :
                            selectedTool === 2 ? "Pesquisa de Satisfação Mobile Preview" :
                            "Mobile Preview"
                          }
                          width={240}
                          height={488}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-[#213365]">
                  Comece a usar agora mesmo!
                </h3>
                <p className="text-[#213365] mb-8">
                  Experimente todas as funcionalidades e veja como podemos ajudar seu negócio a crescer.
                </p>
                <Link
                  href="https://api.whatsapp.com/send?phone=5579999018990&text=Olá! Gostaria de começar a usar o Kanzap."
                  target="_blank"
                  className="bg-[#eb594c] text-white px-8 py-4 rounded-xl hover:bg-[#d64c40] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                >
                  Começar agora mesmo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 