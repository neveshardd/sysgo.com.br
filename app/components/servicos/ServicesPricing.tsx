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
    title: "MAP-OS Premium",
    description: "Ideal para técnicos e assistências em geral",
    badge: "Novidade",
    icon: Gem,
    features: [
      "Todos os recursos do plano Instância MAP-OS, com melhorias de desempenho e usabilidade",
      "Relatórios Avançados e Financeiro Detalhado para tomada de decisão estratégica.",
      "Integrações com ferramentas externas como Google Agenda, WhatsApp e CRMs.",
      "Dashboard Personalizado por Perfil de Usuário (administrador, técnico, cliente, etc)."
    ],
    highlight: true
  },
  {
    title: "Personalização MAP-OS",
    description: "Hospedagem em nuvem com preço competitivo",
    badge: "Personalizado",
    icon: Wrench,
    features: [
      "Funcionalidades desenvolvidas conforme sua necessidade",
      "Layout e Interface Visual Personalizados",
      "Ajustes de Fluxos e Campos, adicionando ou removendo etapas, formulários, módulos",
      "Equipe de Desenvolvimento dedicada"
    ],
    highlight: false
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fcfdfd_80%)]"></div>

      {/* Green Glow Effect - Intensified */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1BE000]/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-4">
          Planos de Gestão de Ordens de Serviço
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start relative z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border flex flex-col h-full transition-all ${plan.highlight
              ? 'bg-[#f0fdf9] border-[#0d3b35] shadow-xl md:scale-105 z-10'
              : 'bg-[#f8f9fa] border-gray-200 hover:shadow-md'
              }`}
          >
            <div className="flex justify-between items-start mb-8 gap-4">
              <p className="text-sm text-gray-600 leading-snug max-w-[180px]">
                {plan.description}
              </p>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap ${plan.highlight
                ? 'bg-white border border-[#0d3b35] text-[#0d3b35]'
                : 'bg-white border border-gray-200 text-gray-600'
                }`}>
                {plan.badge}
              </span>
            </div>

            <div className="mb-6 text-[#0d3b35]">
              <plan.icon className="w-6 h-6 stroke-[1.5]" />
            </div>

            <h3 className="text-2xl font-bold text-[#0d3b35] mb-8">{plan.title}</h3>

            <ul className="space-y-4 mb-10 grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full cursor-pointer py-3.5 rounded-xl font-bold text-sm transition-all ${plan.highlight
              ? 'bg-[#0d3b35] text-white hover:bg-[#0a2e2a] shadow-lg'
              : 'bg-[#f0f2f2] text-[#0d3b35] hover:bg-[#e1e4e4]'
              }`}>
              Ver mais detalhes
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
