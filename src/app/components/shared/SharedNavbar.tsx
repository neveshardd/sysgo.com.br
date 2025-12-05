"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SharedNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="SysGO" width={120} height={39} priority style={{ height: "auto" }} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-teal-900">
          <Link href="/" className="hover:text-[#0d3b35] transition-colors text-sm">Início</Link>
          <Link href="/servicos" className="hover:text-[#0d3b35] transition-colors text-sm">Serviços</Link>
          <Link href="/hospedagem" className="hover:text-[#0d3b35] transition-colors text-sm">Hospedagem</Link>
          <Link href="/personalizado" className="hover:text-[#0d3b35] transition-colors text-sm">Personalizado</Link>
        </nav>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Link href="#" className="border border-gray-200 cursor-pointer px-6 py-2.5 text-sm font-semibold text-[#0d3b35] bg-white shadow-xl rounded-xl hover:bg-gray-50 transition-all">
          Entrar
        </Link>
        <Link href="#" className="px-6 py-2.5 cursor-pointer text-sm font-semibold shadow-xl text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all hover:-translate-y-0.5">
          Começar agora
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-[#0d3b35]"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <Image src="/logo.svg" alt="SysGO" width={100} height={33} style={{ height: "auto" }} />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-[#0d3b35] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-8">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-[#0d3b35] transition-colors">Início</Link>
              <Link href="/servicos" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-[#0d3b35] transition-colors">Serviços</Link>
              <Link href="/hospedagem" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-[#0d3b35] transition-colors">Hospedagem</Link>
              <Link href="/personalizado" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-[#0d3b35] transition-colors">Personalizado</Link>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <Link href="#" className="w-full text-center border border-gray-200 cursor-pointer px-6 py-3 text-sm font-semibold text-[#0d3b35] bg-white shadow-sm rounded-xl hover:bg-gray-50 transition-all">
                Entrar
              </Link>
              <Link href="#" className="w-full text-center px-6 py-3 cursor-pointer text-sm font-semibold shadow-xl text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all">
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
