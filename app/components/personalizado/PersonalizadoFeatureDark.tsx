import Image from "next/image";

export default function PersonalizadoFeatureDark() {
  return (
    <section className="py-20 bg-[#0d3b35] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/depoiments/section-image.png"
                alt="Servidor e Especialista"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Cada negócio é único. Seu sistema também pode ser.
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Já atendemos diversas empresas de diferentes segmentos, e sabemos adaptar processos e ferramentas reais e o caminho mais curto para os resultados.
              </p>
              <p>
                Com a SysGO, você tem um sistema que fala sua língua, com as funções que seu negócio realmente precisa — e sem pagar por aquilo que não vai usar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
