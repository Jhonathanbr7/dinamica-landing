import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="relative h-12 w-48">
            <Image 
              src="/logo.jpg" 
              alt="Dinâmica Informática" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
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
      </div>
    </header>
  );
}
