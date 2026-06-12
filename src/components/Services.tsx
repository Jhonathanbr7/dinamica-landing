import { FileText, Wrench, MonitorSmartphone, Printer } from "lucide-react";

const services = [
  {
    title: "Auxílio Digital e Burocrático",
    description: "Desbloqueio de empréstimos INSS, licenciamento de veículos, recuperação de senhas, currículos, contratos, declarações e carteirinha de presídios.",
    icon: FileText,
  },
  {
    title: "Manutenção de Computadores",
    description: "Formatação, instalação de softwares, limpeza preventiva e conserto de notebooks, computadores de mesa e celulares.",
    icon: Wrench,
  },
  {
    title: "Venda de Eletrônicos",
    description: "Ampla variedade de acessórios de informática, cabos, periféricos e peças de reposição para seus dispositivos.",
    icon: MonitorSmartphone,
  },
  {
    title: "Impressões e Cópias",
    description: "Serviço rápido de impressões a laser e coloridas, cópias, encadernação, plastificação e digitalização de documentos.",
    icon: Printer,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[var(--color-dinamica-blue)]">
            Nossas Especialidades
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tudo o que você precisa em um só lugar
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Na Dinâmica Informática, oferecemos soluções completas para resolver seus problemas tecnológicos e facilitar processos burocráticos do dia a dia.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <service.icon className="h-6 w-6 text-[var(--color-dinamica-blue)]" aria-hidden="true" />
                  </div>
                  {service.title}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
