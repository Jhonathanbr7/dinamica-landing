import { 
  Wrench, 
  Code,
  Printer,
  ShieldCheck,
  Recycle,
  Fingerprint
} from "lucide-react";

const services = [
  {
    title: "Auxílio Digital e Desburocratização",
    description: "Resolvemos problemas de acesso e burocracias virtuais para você.",
    icon: Fingerprint,
    color: "from-blue-500 to-indigo-600",
    items: [
      "Desbloqueio de Benefícios INSS",
      "Emissão de Licenciamento de Veículo",
      "Recuperação de Senhas (gov.br, e-mails, etc)",
      "Agendamentos: Poupatempo e Seguro Desemprego",
      "Carteirinha de Visita para Presídios",
      "Digitação de Currículos, Contratos e Declarações"
    ]
  },
  {
    title: "Desenvolvimento de Software",
    description: "Sistemas sob medida e presença digital de alto impacto para o seu negócio.",
    icon: Code,
    color: "from-[var(--color-dinamica-blue)] to-blue-800",
    items: [
      "Landing Pages de Alta Conversão",
      "E-commerces e Lojas Virtuais",
      "Sistemas de Gestão Empresarial",
      "Aplicativos Android e Desktop"
    ]
  },
  {
    title: "Manutenção Especializada",
    description: "Seu equipamento nas mãos de quem entende.",
    icon: Wrench,
    color: "from-emerald-500 to-[var(--color-dinamica-green)]",
    items: [
      "Computadores, Notebooks e Celulares",
      "Limpeza Preventiva e Troca de Pasta Térmica",
      "Formatação e Instalação de Sistemas",
      "Upgrades de Peças (SSD, Memória RAM)"
    ]
  },
  {
    title: "Impressões e Serviços Rápidos",
    description: "Serviços gráficos de balcão na hora.",
    icon: Printer,
    color: "from-violet-500 to-purple-600",
    items: [
      "Impressões e Xerox",
      "Plastificação de Documentos",
      "Escaneamento e Digitalização",
      "Envio Profissional de E-mails"
    ]
  },
  {
    title: "Sustentabilidade e Eco-TI",
    description: "O ciclo final de vida da tecnologia com responsabilidade.",
    icon: Recycle,
    color: "from-teal-500 to-emerald-500",
    items: [
      "Recolhimento de Lixo Eletrônico",
      "Descarte Correto Certificado",
      "Doação de Peças Reutilizáveis",
      "Ajuda Ativa ao Meio Ambiente"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-400 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-[var(--color-dinamica-green)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-dinamica-blue)] mb-3">
            O QUE FAZEMOS
          </h2>
          <p className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Soluções completas para sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-dinamica-blue)] to-blue-500">Vida Digital</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Muito além de uma assistência técnica. A Dinâmica Informática é o seu hub para resolver qualquer pendência tecnológica, burocrática ou estrutural de software.
          </p>
        </div>
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`group flex flex-col bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${index === 0 || index === 1 ? 'md:col-span-2 lg:col-span-2 xl:col-span-1' : ''}`}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-8 border-b border-slate-100 pb-6">
                  {service.description}
                </p>
                
                <ul className="flex flex-col gap-3 mt-auto">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--color-dinamica-green)] mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
