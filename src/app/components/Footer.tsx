'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ScheduleModal from './ScheduleModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <Image
                src="/logorodape.png"
                alt="Kanzap"
                width={180}
                height={54}
                className="w-auto h-12"
              />
            </div>
            <p className="text-gray-400">
              Sua solução completa para atendimento multicanal via WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link href="/#recursos" className="text-gray-400 hover:text-[#eb594c] transition-colors">Recursos</Link></li>
              <li><Link href="/#precos" className="text-gray-400 hover:text-[#eb594c] transition-colors">Planos</Link></li>
              <li>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-400 hover:text-[#eb594c] transition-colors cursor-pointer"
                >
                  Demonstração
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-[#eb594c] transition-colors">Sobre nós</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-[#eb594c] transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-gray-400 hover:text-[#eb594c] transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-[#eb594c] transition-colors">Termos de Uso</Link></li>
              <li><Link href="/lgpd" className="text-gray-400 hover:text-[#eb594c] transition-colors">LGPD</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Kanzap. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal de Agendamento */}
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}