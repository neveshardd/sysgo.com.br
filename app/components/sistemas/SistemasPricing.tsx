import { Rocket, Check, Building2, Gem, CheckCheck, CircleCheck, CircleCheckBig } from "lucide-react";

export default function SistemasPricing() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#fcfdfd] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '4rem 3rem'
        }}
      ></div>

      {/* Green Gradient Overlay - Intensified */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(13,59,53,0.08)_0%,transparent_70%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-[radial-gradient(ellipse_at_top,rgba(13,59,53,0.15)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Center Glow for Middle Card */}
      <div className="absolute top-5/8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1BE000]/20 rounded-full blur-[100px] -z-10"></div>

      {/* Linear Gradient Mask - Fades grid at all edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #fcfdfd 0%, transparent 50%, transparent 85%, #fcfdfd 100%),
            linear-gradient(to bottom, #fcfdfd 0%, transparent 60%, transparent 85%, #fcfdfd 100%)
          `
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-6">
            Planos de Hospedagem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Starter */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">O essencial para começar com segurança</span>
              <span className="text-[10px] font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-wider">Básico</span>
            </div>
            <div className="mb-6 text-[#0d3b35]">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Starter</h3>
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <ul className="space-y-4 mb-8 grow">
              {[
                "5 caixas de e-mail",
                "5GB Armazenamento",
                "SSL Grátis",
                "Backup Diário",
                "LiteSpeed Cache",
                "Anti-Spam Premium",
                "Migração Grátis",
                "Servidores no Brasil"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CircleCheckBig className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer py-3.5 rounded-xl shadow-xl border border-gray-200 text-[#0d3b35] font-semibold text-sm transition-colors">
              Assinar agora
            </button>
          </div>

          {/* Enterprise - Highlighted */}
          <div className="rounded-2xl p-[1.2px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))] relative flex flex-col h-full md:scale-105 z-10">
            <div className="bg-[#f8fcfb] rounded-2xl p-8 flex flex-col h-full w-full">
              <div className="flex justify-between items-start mb-8">
                <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">Mais recursos para empresas em expansão</span>
                <div className="rounded-full p-[1.5px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))]">
                  <span className="block text-[10px] font-semibold px-3 py-1 bg-white rounded-full text-[#0d3b35] uppercase tracking-wider">Profissional</span>
                </div>
              </div>
              <div className="mb-6 text-[#0d3b35]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Enterprise</h3>
              <div className="w-full h-px bg-[#0d3b35]/10 mb-6"></div>
              <ul className="space-y-4 mb-8 grow">
                {[
                  "15 caixas de e-mail",
                  "15GB Armazenamento",
                  "SSL Grátis",
                  "Backup Diário",
                  "LiteSpeed Cache",
                  "Anti-Spam Premium",
                  "Migração Grátis",
                  "Servidores no Brasil"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CircleCheckBig className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full cursor-pointer py-3.5 rounded-xl bg-[#0d3b35] hover:bg-[#0a2e2a] text-white font-semibold text-sm transition-colors shadow-lg">
                Assinar agora
              </button>
            </div>
          </div>

          {/* Premium */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">Máxima performance e exclusividade total</span>
              <span className="text-[10px] font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-wider">Premium</span>
            </div>
            <div className="mb-6 text-[#0d3b35]">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Premium</h3>
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <ul className="space-y-4 mb-8 grow">
              {[
                "25 caixas de e-mail",
                "25GB Armazenamento",
                "SSL Grátis",
                "Backup Diário",
                "LiteSpeed Cache",
                "Anti-Spam Premium",
                "Migração Grátis",
                "Servidores no Brasil"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CircleCheckBig className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer py-3.5 rounded-xl shadow-xl border border-gray-200 text-[#0d3b35] font-semibold text-sm transition-colors">
              Assinar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
