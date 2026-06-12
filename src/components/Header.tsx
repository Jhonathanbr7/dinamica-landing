"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80 z-50 -ml-3 sm:ml-0">
          <div className="relative h-16 w-60 sm:h-20 sm:w-[320px] overflow-hidden rounded-xl bg-white">
            <Image 
              src="/logo_nova.png" 
              alt="Logo Dinâmica" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#servicos" className="hover:text-[var(--color-dinamica-blue)] transition-colors">Serviços</Link>
            <Link href="#contato" className="hover:text-[var(--color-dinamica-blue)] transition-colors">Contato</Link>
          </nav>
          <Link
            href="#contato"
            className="rounded-full bg-[var(--color-dinamica-blue)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-800 hover:shadow-md hover:-translate-y-0.5"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-[var(--color-dinamica-blue)] z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          <nav className="flex flex-col gap-6 text-lg font-bold text-slate-700">
            <Link 
              href="#servicos" 
              className="hover:text-[var(--color-dinamica-blue)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nossos Serviços
            </Link>
            <Link 
              href="#contato" 
              className="hover:text-[var(--color-dinamica-blue)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
          <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full justify-center rounded-xl bg-[var(--color-dinamica-blue)] px-6 py-4 text-base font-bold text-white shadow-md transition-all active:scale-95"
            >
              Falar com Especialista
            </Link>
            <a
              href="https://wa.me/5516999894161?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Din%C3%A2mica%20Inform%C3%A1tica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-white shadow-md transition-all active:scale-95 hover:bg-emerald-600"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
