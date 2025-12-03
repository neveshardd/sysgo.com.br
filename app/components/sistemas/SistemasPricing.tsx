import { Rocket, Check, Building2, Gem } from "lucide-react";

export default function SistemasPricing() {
  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-4">
            Planos de Hospedagem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
          {/* Starter */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs text-gray-500 max-w-[120px] leading-tight">O essencial para começar com segurança</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-600">Básico</span>
            </div>

            <div className="mb-6">
              <Rocket className="w-8 h-8 text-[#0d3b35] mb-4 stroke-[1.5]" />
              <h3 className="text-2xl font-bold text-[#0d3b35]">Starter</h3>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
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
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#0d3b35]" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg font-medium border border-gray-200 text-[#0d3b35] hover:bg-gray-50 transition-all text-sm">
              Assinar agora
            </button>
          </div>

          {/* Enterprise - Highlighted */}
          <div className="p-8 rounded-2xl bg-[#f0fdf4] border-2 border-[#a7f3d0] shadow-lg relative h-full flex flex-col transform md:-translate-y-4">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs text-gray-500 max-w-[120px] leading-tight">Mais recursos para empresas em expansão</span>
              <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600">Profissional</span>
            </div>

            <div className="mb-6">
              <Building2 className="w-8 h-8 text-[#0d3b35] mb-4 stroke-[1.5]" />
              <h3 className="text-2xl font-bold text-[#0d3b35]">Enterprise</h3>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
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
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#0d3b35]" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg font-medium bg-[#0d3b35] text-white hover:bg-[#0a2e2a] transition-all text-sm shadow-md">
              Assinar agora
            </button>
          </div>

          {/* Premium */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs text-gray-500 max-w-[120px] leading-tight">Máxima performance e exclusividade total</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-600">Premium</span>
            </div>

            <div className="mb-6">
              <Gem className="w-8 h-8 text-[#0d3b35] mb-4 stroke-[1.5]" />
              <h3 className="text-2xl font-bold text-[#0d3b35]">Premium</h3>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
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
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#0d3b35]" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg font-medium border border-gray-200 text-[#0d3b35] hover:bg-gray-50 transition-all text-sm">
              Assinar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
