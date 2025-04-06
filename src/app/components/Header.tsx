'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kanzap"
                width={180}
                height={54}
                priority
                className="h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#recursos" className="text-gray-600 hover:text-[#eb594c] relative group">
              <span className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-1 font-semibold">
                Recursos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb594c] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link href="/#precos" className="text-gray-600 hover:text-[#eb594c] relative group">
              <span className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-1 font-semibold">
                Planos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb594c] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#eb594c] relative group">
              <span className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-1 font-semibold">
                Sobre
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb594c] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#eb594c] relative group">
              <span className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-1 font-semibold">
                Contato
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb594c] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://app.kanzap.com.br/#/login"
              target="_blank"
              className="bg-[#213365] text-white px-6 py-2 rounded-full hover:bg-transparent hover:text-[#213365] hover:border-[#213365] hover:border-2 transition-all duration-300"
            >
              Entrar
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#eb594c] focus:outline-none transition-colors duration-300"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[72px] bg-white shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <Link
                href="/#recursos"
                className="block text-gray-600 hover:text-[#eb594c] py-2 transform hover:translate-x-2 transition-transform duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="/#precos"
                className="block text-gray-600 hover:text-[#eb594c] py-2 transform hover:translate-x-2 transition-transform duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Planos
              </Link>
              <Link
                href="/sobre"
                className="block text-gray-600 hover:text-[#eb594c] py-2 transform hover:translate-x-2 transition-transform duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block text-gray-600 hover:text-[#eb594c] py-2 transform hover:translate-x-2 transition-transform duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="https://app.kanzap.com.br/#/login"
                target="_blank"
                className="block bg-[#213365] text-white px-6 py-2 rounded-full hover:bg-transparent hover:text-[#213365] hover:border-[#213365] hover:border-2 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 