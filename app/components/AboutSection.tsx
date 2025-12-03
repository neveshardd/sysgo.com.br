export default function AboutSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 bg-[#fcfdfd]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-6 leading-tight">
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/section2-image.jpg" alt="Rotina leve" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
