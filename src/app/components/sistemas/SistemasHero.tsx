import Image from "next/image";

export default function SistemasHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-semibold text-[#0d3b35] leading-tight mb-6">
              Seu site no ar, sem dor de cabeça
            </h1>
            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              Hospedagem com recursos certos, gestão simplificada e suporte direto e humanizado. Tudo o que você precisa para sua presença digital profissional.
            </p>
            <button className="px-8 py-4 cursor-pointer bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-all hover:-translate-y-1 shadow-lg shadow-green-900/20">
              Meu Sistema
            </button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/system/hero-image.jpg"
                alt="Dashboard do Sistema"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
