import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Deodoro%2C+575%2C+Centro+Sao+Joaquim+da+Barra+-+SP";

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 animate-fade-in-up">
        
        <div className="flex justify-center md:order-2">
          <nav className="flex gap-4 text-sm font-medium leading-6 text-slate-500">
            <Link href="#servicos" className="hover:text-[var(--color-dinamica-blue)] transition-colors">
              Serviços
            </Link>
            <Link href="#contato" className="hover:text-[var(--color-dinamica-blue)] transition-colors">
              Contato
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center md:items-start gap-2 text-sm leading-5 text-slate-500 hover:text-[var(--color-dinamica-blue)] transition-colors text-center md:text-left"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
                <MapPin className="h-4 w-4 text-[var(--color-dinamica-green)] group-hover:scale-110 transition-transform" />
              </div>
              <span className="mt-1.5">
                Rua Marechal Deodoro, 575, Centro <br className="md:hidden" /> 
                São Joaquim da Barra - SP (CEP: 14.600-059)
              </span>
            </a>
            <p className="text-center md:text-left text-xs leading-5 text-slate-400 md:pl-10">
              &copy; {currentYear} Dinâmica Informática. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
