import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        <div className="flex justify-center gap-x-6 md:order-2">
          <nav className="flex gap-4 text-sm leading-6 text-slate-500">
            <Link href="#servicos" className="hover:text-[var(--color-dinamica-blue)]">
              Serviços
            </Link>
            <Link href="#contato" className="hover:text-[var(--color-dinamica-blue)]">
              Contato
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-500">
            &copy; {currentYear} Dinâmica Informática e Serviços Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
