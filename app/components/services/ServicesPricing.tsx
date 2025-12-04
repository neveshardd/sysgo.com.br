import { CheckCircle2, FileText, Gem, Wrench } from "lucide-react";

const plans = [
  {
    title: "Instância MAP-OS",
    description: "Pensado para todos os tipos de Varejo e Distribuidoras",
    badge: "Padrão",
    icon: FileText,
    features: [
      "Acesso Completo ao MAP-OS com Ordens de Serviço, Vendas, Clientes, Produtos, Relatórios e mais.",
      "Servidor Dedicado em SP, com subdomínio e SSL incluídos.",
      "Usuários Ilimitados e 5GB de Armazenamento.",
      "Suporte Especializado"
    ],
    highlight: false
  },
  {
    title: "Emissão de NF",
    description: "Validação em tempo real",
    badge: "Novidade",
    icon: Gem,
    features: [
      "Emissão NFC-e/NF-e",
      "Cálculo Automático de Impostos (ICMS, IPI, PIS, COFINS, etc.)",
      "Envio Automático do XML e DANFE por e-mail para clientes e contabilidade",
      "Certificado Digital A1/A3 (Suporte e Integração para assinatura)"
    ],
    highlight: true
  },
  {
    title: "Personalização MAP-OS",
    description: "Hospedagem em nuvem com preço competitivo",
    badge: "Personalizado",
    icon: Wrench,
    features: [
      "Conforme sua necessidade",
      "Layout e Interface Personalizado",
      "Ajustes de Fluxos e Campos, adicionando ou removendo etapas, formulários, módulos",
      "Equipe de Desenvolvimento dedicada"
    ],
    highlight: false
  },
];

export default function ServicesPricing() {
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
            Planos de Gestão de Ordens de Serviço
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {plans.map((plan, index) => {
            if (plan.highlight) {
              return (
                <div key={index} className="rounded-2xl p-[1.2px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))] relative flex flex-col h-full md:scale-105 z-10">
                  <div className="bg-[#f8fcfb] rounded-2xl p-8 flex flex-col h-full w-full">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-sm font-medium text-gray-600 max-w-[100px] leading-snug">{plan.description}</span>
                      <div className="rounded-full p-[1.5px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))]">
                        <span className="block text-[10px] font-semibold px-3 py-1 bg-white rounded-full text-[#0d3b35] uppercase tracking-wider">{plan.badge}</span>
                      </div>
                    </div>
                    <div className="mb-6 text-[#0d3b35]">
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">{plan.title}</h3>
                    <div className="w-full h-px bg-[#0d3b35]/10 mb-6"></div>
                    <ul className="space-y-4 mb-8 grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full cursor-pointer shadow-md py-3.5 rounded-xl bg-[#0d3b35] hover:bg-[#0a2e2a] text-white font-semibold text-sm transition-colors">
                      Ver mais detalhes
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm font-medium text-gray-600 max-w-[160px] leading-snug">{plan.description}</span>
                    <span className="text-[10px] font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-wider">{plan.badge}</span>
                  </div>
                  <div className="mb-6 text-[#0d3b35]">
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0d3b35] mb-4">{plan.title}</h3>
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  <ul className="space-y-4 mb-8 grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cursor-pointer border border-gray-200 py-3.5 rounded-xl shadow-md text-[#0d3b35] font-semibold text-sm transition-colors">
                    Ver mais detalhes
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
