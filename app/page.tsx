import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#0d3b35] font-sans relative overflow-hidden selection:bg-[#0d3b35] selection:text-white">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      {/* Radial Gradient for subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(252,253,253,0)_70%)] pointer-events-none"></div>

      {/* Navbar */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="SysGO" className="w-38" />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-[#0d3b35] transition-colors">Início</Link>
          <Link href="#" className="hover:text-[#0d3b35] transition-colors">Serviços</Link>
          <Link href="#" className="hover:text-[#0d3b35] transition-colors">Sistemas</Link>
          <Link href="#" className="hover:text-[#0d3b35] transition-colors">Depoimentos</Link>
          <Link href="#" className="hover:text-[#0d3b35] transition-colors">Contato</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden sm:block px-6 py-2.5 text-sm font-semibold text-[#0d3b35] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all hover:shadow-sm">
            Entrar
          </Link>
          <Link href="#" className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Começar agora
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10 hover:shadow-md transition-shadow cursor-default">
          <span className="text-[#0d3b35]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#0d3b35] stroke-none">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </span>
          <span className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">Soluções em Nuvem</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0d3b35] mb-8 leading-[1.1]">
          Seu negócio mais ágil, com sistemas <br className="hidden md:block" />
          que simplificam sua rotina.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sistemas intuitivos para ordem de serviço, sites, painéis personalizados e mais.
          Tudo que sua empresa precisa para funcionar com mais controle, organização e tranquilidade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="#" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#0d3b35] rounded-lg hover:bg-[#0a2e2a] shadow-lg shadow-[#0d3b35]/20 transition-all hover:-translate-y-1">
            Teste grátis por 7 dias
          </Link>
          <Link href="#" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#0d3b35] bg-[#f0f2f2] rounded-lg hover:bg-[#e1e4e4] transition-all hover:-translate-y-1">
            Entrar em contato
          </Link>
        </div>
      </main>

      {/* Social Proof */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-t border-gray-200/60 pt-12">
          <p className="text-sm font-semibold text-[#0d3b35] max-w-[200px] text-center lg:text-left leading-snug">
            Mais de 50 empresas já confiam na SysGO
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {/* Logos as Text */}
            <span className="text-2xl font-black tracking-tighter text-gray-600 font-sans">LOGOIPSUM</span>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full border-2 border-gray-600"></div>
              <span className="text-xl font-bold text-gray-600 font-sans">Company</span>
            </div>
            <span className="text-2xl font-bold italic text-gray-600 font-serif">BrandName</span>
            <span className="text-xl font-medium text-gray-600 uppercase tracking-widest">Partner</span>
            <span className="text-2xl font-bold text-gray-600 font-mono">IPSUM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
