import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 bg-[#fcfdfd]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-6 leading-tight">
            Mais leveza na rotina de quem carrega tudo nas costas
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              A SysGO nasceu para tirar o peso da desorganização das mãos de quem toca o próprio negócio.
            </p>
            <p>
              Oferecemos sistemas simples, diretos e eficientes para micro e pequenas empresas que não têm tempo (nem paciência) pra planilha, papel e aplicativo complicado.
            </p>
            <p>
              Criamos soluções com quem está na linha de frente e, por isso, falamos a sua língua.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-w-16 aspect-h-9"> {/* Added aspect ratio for better fill behavior */}
            <Image src="/section2-image.jpg" alt="Rotina leve" className="object-cover" width={1000} height={562} />
          </div>
        </div>
      </div>
    </section>
  );
}
