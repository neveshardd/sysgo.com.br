export default function ContatoHero() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0d3b35] leading-tight mb-8 max-w-4xl mx-auto">
          A tecnologia certa muda a forma como você trabalha
        </h1>

        <button className="px-8 py-3 bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-all shadow-lg mb-16">
          Quero essa tecnologia
        </button>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <h3 className="text-[#0d3b35] font-bold text-lg mb-4">+ 200 de clientes ativos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A SysGO nasceu com um único objetivo: tornar a tecnologia mais acessível, humana e eficiente para quem toca o próprio negócio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <h3 className="text-[#0d3b35] font-bold text-lg mb-4">Sistema simples</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A gente acredita que empreender já é difícil demais para ter que lidar com sistemas complicados.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <h3 className="text-[#0d3b35] font-bold text-lg mb-4">Eficaz e sensato</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              É por isso que criamos soluções que organizam, otimizam e transformam rotinas, sem exigir conhecimento técnico e sem gerar mistério.
            </p>
          </div>
        </div>

        {/* Logos Strip */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale mb-16">
          {/* Placeholder Logos using Text/SVG */}
          <div className="text-2xl font-black font-sans tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-black font-serif tracking-widest">LOGO</div>
          <div className="text-2xl font-bold font-mono">IPSUM</div>
          <div className="text-2xl font-black italic">logo ipsum</div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div> LOGO
          </div>
        </div>

        <div className="inline-block px-6 py-2 bg-[#e6fcf5] text-[#0d3b35] rounded-full text-sm font-medium">
          Criamos tecnologia simples para empresas reais.
        </div>
      </div>
    </section>
  );
}
