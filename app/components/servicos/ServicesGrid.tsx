import { Hand, SquareUser, Wrench, Landmark, PieChart, Gem, ChartArea } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "OS",
    description: "Criação de ordens de serviço em segundos",
  },
  {
    icon: SquareUser,
    title: "Histórico",
    description: "Histórico completo por cliente",
  },
  {
    icon: Wrench,
    title: "Serviços",
    description: "Acompanhamento de status do serviço",
    highlight: true,
    badge: "Premium"
  },
  {
    icon: Landmark,
    title: "Cobrança",
    description: "Cobrança por link (Pix, boleto ou cartão)",
  },
  {
    icon: PieChart,
    title: "Relatórios",
    description: "Relatórios simples para entender o que está funcionando",
  },
  {
    icon: ChartArea,
    title: "Relatórios",
    description: "Relatórios simples para entender o que está funcionando",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] leading-tight">
          Tudo o que você precisa, em um único sistema
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border transition-all ${feature.highlight
              ? 'bg-[#f9eeb0] border-[#f9eeb0]'
              : 'bg-[#f8f9fa] border-gray-200'
              }`}
          >
            <div className="flex items-start gap-5">
              <div className="text-[#0d3b35] shrink-0">
                <feature.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[#0d3b35]">{feature.title}</h3>
                  {feature.highlight && (
                    <span className="bg-white flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full text-[#0d3b35] uppercase tracking-wider shadow-sm">
                      <Gem className="w-3 h-3" /> {feature.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-8 py-3 cursor-pointer bg-[#0d3b35] text-white font-semibold rounded-lg hover:bg-[#0a2e2a] transition-all shadow-md hover:shadow-lg text-sm">
          Contrate Agora
        </button>
      </div>
    </section>
  );
}
