'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ScheduleModal from './ScheduleModal'

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5 relative">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#213365] mb-6">
            Planos <span className="text-[#eb594c]">Personalizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos planos são personalizados para atender suas necessidades. Fale com a gente e receba uma proposta sob medida!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Coluna da esquerda */}
              <div>
                <h3 className="text-2xl font-bold text-[#213365] mb-6">
                  Por que escolher um plano personalizado?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#eb594c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Plano adaptado ao tamanho e necessidades da sua empresa</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#eb594c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Número de atendentes ajustado à sua demanda</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#eb594c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Recursos específicos para seu segmento de atuação</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#eb594c] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Suporte dedicado e treinamento personalizado</p>
                  </li>
                </ul>
              </div>

              {/* Coluna da direita */}
              <div className="flex flex-col justify-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#213365] mb-4">
                    Como funciona?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Entre em contato conosco e nossa equipe irá entender suas necessidades para criar uma proposta personalizada que se adeque perfeitamente ao seu negócio.
                  </p>
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#213365] text-white px-8 py-4 rounded-xl hover:bg-[#eb594c] transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Solicitar proposta
                    </button>
                    <Link
                      href="https://api.whatsapp.com/send?phone=5579999018990&text=Olá! Gostaria de saber mais sobre os planos do Kanzap."
                      target="_blank"
                      className="bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#128C7E] transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Falar no WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Solicitação de Proposta */}
      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Solicitar Proposta"
        description="Preencha o formulário abaixo e nossa equipe entrará em contato para criar um plano personalizado para sua empresa."
      />
    </section>
  )
}

export default PricingSection 