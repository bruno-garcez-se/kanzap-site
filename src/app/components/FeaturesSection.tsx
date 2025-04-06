'use client'

import React, { useState, useEffect } from 'react'

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('atendimento')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Array com as chaves das categorias para facilitar a navegação
  const categoryKeys = ['atendimento', 'gestao', 'comunicacao', 'seguranca', 'automacao']

  // Efeito para alternar automaticamente as abas
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        const currentIndex = categoryKeys.indexOf(activeTab)
        const nextIndex = (currentIndex + 1) % categoryKeys.length
        setActiveTab(categoryKeys[nextIndex])
      }, 10000) // Alterna a cada 10 segundos
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeTab, isAutoPlaying])

  // Função para lidar com o clique manual nas abas
  const handleTabClick = (key: string) => {
    setActiveTab(key)
    setIsAutoPlaying(false) // Para a alternância automática quando o usuário clica
  }

  const categories = {
    atendimento: {
      title: 'Atendimento',
      description: 'Ferramentas essenciais para um atendimento eficiente e profissional',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
          title: 'Chatbot Inteligente',
          description: 'Automatize seus atendimentos com um chatbot personalizável para respostas rápidas.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          title: 'Respostas Rápidas',
          description: 'Crie atalhos para mensagens frequentes e otimize o tempo da sua equipe.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Controle de Horário de Atendimento',
          description: 'Configure horários específicos de funcionamento para seus atendimentos.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          ),
          title: 'Pesquisa de Satisfação',
          description: 'Obtenha feedback dos clientes por meio de pesquisas automáticas ao final do atendimento.'
        }
      ]
    },
    gestao: {
      title: 'Gestão e Organização',
      description: 'Recursos avançados para gerenciar sua equipe e processos',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          title: 'Múltiplos Atendentes',
          description: 'Divida seus atendentes por setores e personalize a distribuição dos atendimentos.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          ),
          title: 'CRM com Kanban',
          description: 'Gerencie seus contatos e processos comerciais com um CRM visual no formato Kanban.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          title: 'Criação de Tarefas',
          description: 'Atribua tarefas para sua equipe, acompanhe prazos e mantenha o fluxo de trabalho sempre organizado.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          title: 'Gerenciamento de Filas e Setores',
          description: 'Direcione os atendimentos para os departamentos corretos, garantindo organização e eficiência.'
        }
      ]
    },
    comunicacao: {
      title: 'Comunicação',
      description: 'Recursos para uma comunicação eficiente e multicanal',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          ),
          title: 'Mensagens Ilimitadas',
          description: 'Envie e receba mensagens sem restrições, tanto pelo chatbot quanto pelos atendentes humanos.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ),
          title: 'Atendimento Multicanal',
          description: 'Gerencie diferentes canais de comunicação em um único número para sua equipe.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z M12 19l9 2-2-9" />
            </svg>
          ),
          title: 'Disparo em Massa',
          description: 'Envie mensagens em grande escala de forma prática, alcançando todos os seus contatos.',
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          title: 'Agendamento de Mensagens',
          description: 'Programe o envio de mensagens automáticas para interações futuras com clientes.'
        }
      ]
    },
    seguranca: {
      title: 'Segurança e Controle',
      description: 'Recursos para garantir a segurança e o controle das informações',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          title: 'Modo Privado',
          description: 'Garanta a privacidade dos atendimentos, restringindo o acesso às conversas.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          title: 'Espiar Conversas',
          description: 'Atendentes podem visualizar o conteúdo de uma conversa antes de abri-la oficialmente.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          ),
          title: 'Número de Protocolo',
          description: 'Gere automaticamente protocolos de atendimento para rastreamento e acompanhamento de chamados.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Histórico de Conversas',
          description: 'Acompanhe todas as interações registradas, garantindo acesso ao histórico completo do atendimento.'
        }
      ]
    },
    automacao: {
      title: 'Automação e Integração',
      description: 'Recursos para automatizar processos e integrar sistemas',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          title: 'Fluxos Personalizados',
          description: 'Crie e gerencie fluxos de conversa para direcionar melhor seus clientes.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: 'API de Integração',
          description: 'Conecte nosso sistema a outras plataformas e aplicativos usados pela sua empresa.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: 'Relatórios e Monitoramento',
          description: 'Acompanhe métricas de atendimento, produtividade e satisfação com relatórios detalhados.'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ),
          title: 'Integração Nativa',
          description: 'Conecte com suas ferramentas favoritas como Facebook Messenger, Instagram, Mercado Livre...'
        }
      ]
    }
  }

  return (
    <section id="recursos" className="py-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5 relative">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#213365] mb-6">
            Recursos <span className="text-[#eb594c]">Poderosos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para transformar seu atendimento e aumentar suas vendas em uma única plataforma
          </p>
        </div>

        {/* Tabs de navegação com indicador de auto-play */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-[#eb594c] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {/* Controle de auto-play */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#213365] transition-colors"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pausar apresentação
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Continuar apresentação
              </>
            )}
          </button>
        </div>

        {/* Descrição da categoria com animação de fade */}
        <div className="text-center mb-12 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-[#213365] mb-3">
            {categories[activeTab].title}
          </h3>
          <p className="text-gray-600">
            {categories[activeTab].description}
          </p>
        </div>

        {/* Grid de recursos com animação de fade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-300 max-w-5xl mx-auto">
          {categories[activeTab].features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                activeTab === 'gestao' || activeTab === 'seguranca'
                  ? 'hover:border-[#213365]'
                  : 'hover:border-[#eb594c]'
              } transform hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${
                activeTab === 'gestao' || 
                activeTab === 'seguranca' || 
                feature.title === 'Múltiplos Atendentes' ||
                feature.title === 'CRM com Kanban' ||
                feature.title === 'Criação de Tarefas' ||
                feature.title === 'Gerenciamento de Filas e Setores' ||
                feature.title === 'Modo Privado' ||
                feature.title === 'Espiar Conversas' ||
                feature.title === 'Número de Protocolo' ||
                feature.title === 'Histórico de Conversas'
                  ? 'bg-[#eb594c] group-hover:bg-[#213365]' 
                  : 'bg-[#213365] group-hover:bg-[#eb594c]'
              } rounded-2xl flex items-center justify-center mb-6 text-white transition-colors duration-300 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold text-center ${
                feature.title === 'Múltiplos Atendentes' ||
                feature.title === 'CRM com Kanban' ||
                feature.title === 'Criação de Tarefas' ||
                feature.title === 'Gerenciamento de Filas e Setores' ||
                feature.title === 'Modo Privado' ||
                feature.title === 'Espiar Conversas' ||
                feature.title === 'Número de Protocolo' ||
                feature.title === 'Histórico de Conversas'
                  ? 'text-[#eb594c] group-hover:text-[#213365]'
                  : 'text-[#213365] group-hover:text-[#eb594c]'
              } mb-4 transition-colors duration-300`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 