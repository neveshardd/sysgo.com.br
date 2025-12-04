import Image from "next/image";

export default function PersonalizadoHero() {
  return (
    <section className="pt-12 lg:pt-20 lg:pb-0 overflow-hidden bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#0d3b35] leading-tight mb-6">
            Sistema sob medida, do jeito que sua empresa precisa
          </h1>
          <p className="text-sm text-gray-600 mb-8 max-w-3xl mx-auto">
            Projetamos soluções personalizadas para empresas que precisam de mais do que uma plataforma genérica.
          </p>
          <button className="px-8 py-3 cursor-pointer bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-all shadow-lg">
            Contrate Agora
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-10 overflow-hidden bg-white">
            <Image
              src="/depoiments/dash-mockup.svg"
              alt="Dashboard do Sistema"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Decorative blur behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-r from-green-200/30 to-blue-200/30 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
