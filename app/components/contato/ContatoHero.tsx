import { Zap } from "lucide-react";

export default function ContatoHero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-6 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '4rem 3rem'
        }}
      ></div>

      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fbfbfb_70%)]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#0d3b35] leading-tight mb-8 max-w-4xl mx-auto">
          A tecnologia certa muda a forma como você trabalha
        </h1>

        <button className="px-8 py-3 cursor-pointer bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-all shadow-lg mb-16">
          Quero essa tecnologia
        </button>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center">
            <h3 className="text-[#0d3b35] font-semibold text-lg mb-4">+ 200 de clientes ativos</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              A SysGO nasceu com uma missão clara: tornar a tecnologia mais acessível, humana e eficiente para quem toca o próprio negócio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center">
            <h3 className="text-[#0d3b35] font-semibold text-lg mb-4">Sistema simples</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              A gente acredita que empreender já é difícil demais para ter que lidar com sistemas complicados.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center">
            <h3 className="text-[#0d3b35] font-semibold text-lg mb-4">Eficaz e sensato</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              É por isso que criamos soluções que organizam, otimizam e transformam rotinas, sem exigir conhecimento técnico e sem pesar no bolso.
            </p>
          </div>
        </div>
      </div>

      {/* Logos Strip - Full Width with Fade */}
      <div className="relative w-full max-w-[100vw] overflow-hidden mb-16 -mx-6 px-6">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-[#fbfbfb] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-[#fbfbfb] to-transparent z-10"></div>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 lg:gap-12 opacity-40 grayscale w-full max-w-7xl mx-auto px-4">
          {/* Logo 1 */}
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
            LOGOIPSUM
          </div>
          {/* Logo 2 */}
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12a4 4 0 0 1 8 0" /></svg>
          </div>
          {/* Logo 3 */}
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" /></svg>
          </div>
          {/* Logo 4 */}
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" /></svg>
            logo-ipsum
          </div>
          {/* Logo 5 */}
          <div className="font-black text-2xl tracking-widest text-gray-800 shrink-0">LOOO</div>
          {/* Logo 6 */}
          <div className="font-semibold text-2xl text-gray-800 shrink-0">IPSUM</div>
          {/* Logo 7 */}
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 shrink-0">
            logo <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" /></svg> ipsum
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-6 py-2 bg-[#e6fcf5] text-[#0d3b35] rounded-full text-sm font-medium">
          Criamos tecnologia simples para empresas reais.
        </div>
      </div>
    </section>
  );
}
