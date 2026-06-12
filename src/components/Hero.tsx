import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[var(--color-dinamica-blue)] mb-8 ring-1 ring-inset ring-blue-500/20">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-dinamica-green)]"></span>
            Tecnologia e Serviços Digitais
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 leading-[1.1]">
            Descomplique sua vida digital com a <span className="text-[var(--color-dinamica-blue)]">Dinâmica</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-slate-600 mb-10 max-w-2xl mx-auto">
            De manutenções rápidas a auxílio burocrático completo. Resolvemos seus problemas de tecnologia e documentação com agilidade, segurança e preço justo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-dinamica-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Solicitar Atendimento
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-all hover:bg-slate-50"
            >
              Ver Nossos Serviços
            </Link>
          </div>
          
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-dinamica-green)]" />
              Atendimento Rápido
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-dinamica-green)]" />
              Profissionais Qualificados
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-dinamica-green)]" />
              Soluções Descomplicadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
