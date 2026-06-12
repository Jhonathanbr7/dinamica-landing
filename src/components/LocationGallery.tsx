import Image from "next/image";

export default function LocationGallery() {
  const images = [
    { src: "/1_otimizado.png", alt: "Nossa Estrutura 1" },
    { src: "/2_otimizado.png", alt: "Nossa Estrutura 2" },
    { src: "/3_otimizado.png", alt: "Nossa Estrutura 3" },
    { src: "/4_otimizado.png", alt: "Nossa Estrutura 4" },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Conheça nosso <span className="text-[var(--color-dinamica-blue)]">espaço</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Estrutura completa para receber você e seus equipamentos com segurança e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-md transition-all hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
