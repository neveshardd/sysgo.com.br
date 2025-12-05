import { Zap } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '4rem 3rem'
        }}
      ></div>

      {/* Linear Gradient Mask - Fades grid at all edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #fcfdfd 0%, transparent 30%, transparent 85%, #fcfdfd 100%),
            linear-gradient(to bottom, #fcfdfd 0%, transparent 30%, transparent 85%, #fcfdfd 100%)
          `
        }}
      ></div>

      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 shadow-sm rounded-full bg-white border border-gray-200 mb-10 cursor-default">
          <span className="text-[#0d3b35]">
            <Zap className="w-3 h-3" />
          </span>
          <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">Soluções em Nuvem</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-semibold tracking-tight text-[#0d3b35] mb-8 leading-[1.3]">
          Seu negócio mais ágil, com sistemas <br className="hidden md:block" />
          que simplificam sua rotina.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Tudo que sua empresa precisa para funcionar com mais controle, organização e tranquilidade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="#" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#0d3b35] rounded-lg hover:bg-[#0a2e2a] transition-all hover:-translate-y-1">
            Contrate Agora
          </Link>
          <Link href="#" className="w-full sm:w-auto px-8 py-4 text-base border border-gray-200 font-semibold text-[#0d3b35] bg-white shadow-xl rounded-xl transition-all">
            Entrar em contato
          </Link>
        </div>
      </main>
    </section>
  );
}
