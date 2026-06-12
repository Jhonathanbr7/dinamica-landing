import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Laptop, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1C] pt-12 pb-24 lg:pt-40 lg:pb-40">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-dinamica-blue)] opacity-30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[var(--color-dinamica-green)] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            A tecnologia trabalhando a seu favor com a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[var(--color-dinamica-green)] to-emerald-300 drop-shadow-sm">
              Dinâmica Informática
            </span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-slate-300 mb-12 max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Resolvemos problemas digitais e burocráticos para você não perder tempo. Da manutenção do seu computador à criação do seu site.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link
              href="#contato"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-dinamica-blue)] to-blue-700 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(26,35,126,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(26,35,126,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Falar com um Especialista
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-slate-700 hover:border-slate-500"
            >
              Conhecer Nossos Serviços
            </Link>
          </div>
          
          <div className="mt-16 pt-10 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-400 font-medium animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col items-center gap-2 transition-colors hover:text-white">
              <ShieldCheck className="h-6 w-6 text-blue-400" />
              Segurança Total
            </div>
            <div className="flex flex-col items-center gap-2 transition-colors hover:text-white">
              <Zap className="h-6 w-6 text-amber-400" />
              Rapidez e Agilidade
            </div>
            <div className="flex flex-col items-center gap-2 transition-colors hover:text-white text-center">
              <Laptop className="h-6 w-6 text-[var(--color-dinamica-green)]" />
              <span className="hidden lg:inline">Manutenção de Hardware</span>
              <span className="lg:hidden flex flex-col items-center leading-tight">
                <span>Manutenção</span>
                <span>de</span>
                <span>Hardware</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-colors hover:text-white">
              <Code2 className="h-6 w-6 text-emerald-400" />
              Sistemas Próprios
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
