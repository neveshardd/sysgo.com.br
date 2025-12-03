import { Database, Tag, HandHelping } from "lucide-react";

export default function SystemsSection() {
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
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-6">Nossos Sistemas</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nossos sistemas tornam a gestão do negócio mais acessível e simplificada, sendo ferramentas essenciais para impulsionar seu crescimento no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Card 1 */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">Sua presença digital sem dor de cabeça</span>
              <span className="text-[10px] font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-wider">WEB</span>
            </div>
            <div className="mb-6 text-[#0d3b35]">
              <Tag className="w-6 h-6 rotate-90" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Hospedagem de sites</h3>
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed grow">
              Hospedagem, domínio, painel e suporte — tudo configurado e pronto para sua empresa aparecer com estrutura profissional.
            </p>
            <button className="w-full cursor-pointer py-3.5 rounded-xl bg-[#f0f2f2] hover:bg-[#e1e4e4] text-[#0d3b35] font-semibold text-sm transition-colors">
              Ver mais detalhes
            </button>
          </div>

          {/* Card 2 - Highlighted & Slightly Larger */}
          <div className="rounded-2xl p-[1.2px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))] relative flex flex-col h-full md:scale-105 z-10">
            <div className="bg-[#f8fcfb] rounded-2xl p-8 flex flex-col h-full w-full">
              <div className="flex justify-between items-start mb-8">
                <span className="text-sm font-medium text-gray-600 max-w-[100px] leading-snug">Controle de ordens de serviço sem papelada</span>
                <div className="rounded-full p-[1.5px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))]">
                  <span className="block text-[10px] font-semibold px-3 py-1 bg-white rounded-full text-[#0d3b35] uppercase tracking-wider">GESTÃO</span>
                </div>
              </div>
              <div className="mb-6 text-[#0d3b35]">
                <HandHelping className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Map-OS</h3>
              <div className="w-full h-px bg-[#0d3b35]/10 mb-6"></div>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed grow">
                Organize sua assistência técnica ou operação de campo em um só lugar, com alertas automáticos, histórico de clientes, notificações e cobranças integradas.
              </p>
              <button className="w-full cursor-pointer py-3.5 rounded-xl bg-[#0d3b35] hover:bg-[#0a2e2a] text-white font-semibold text-sm transition-colors shadow-lg">
                Ver mais detalhes
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">Sistemas sob medida para o seu negócio</span>
              <span className="text-[10px] font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-wider">SOB-MEDIDA</span>
            </div>
            <div className="mb-6 text-[#0d3b35]">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">Painel Personalizado</h3>
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed grow">
              Criamos soluções exclusivas para empresas que precisam de um sistema específico, funcional e com suporte técnico ágil.
            </p>
            <button className="w-full cursor-pointer py-3.5 rounded-xl bg-[#f0f2f2] hover:bg-[#e1e4e4] text-[#0d3b35] font-semibold text-sm transition-colors">
              Ver mais detalhes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
